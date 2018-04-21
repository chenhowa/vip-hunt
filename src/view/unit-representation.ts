import Coordinates2D from "../model/types/coodinates-2d";
import WadeRepresentation from "./wade-representation";

import * as Rx from "rxjs";
import { SceneObjectInterface } from "./interfaces/scene-object-interface";
import RequestHandler from "../model/interfaces/request-handler";
import MoveRequest from "./requests/move-request";

import * as _ from "lodash";



export default class UnitRepresentation extends WadeRepresentation {
    private moveEvents: Rx.Observable<any> = Rx.Observable.interval(300).map(() => {
        let coords: Coordinates2D = [this.widget.iso.gridCoords.x, this.widget.iso.gridCoords.z];
        return coords;
    });
    private moveSubscription: Rx.Subscription = new Rx.Subscription();
    private lastLocation: Coordinates2D;
    private chaseSubscription: Rx.Subscription = new Rx.Subscription();
    private chaseEvents: Rx.Observable<any> = Rx.Observable.interval(500);s

    constructor(widget: SceneObjectInterface, private unit: RequestHandler) {
        super();
        this.widget = widget;
    }

    travelTo(location: Coordinates2D) {
        this.setDestination(location);
        this.whileMovingUpdateLocation();
    }

    abandonExistingTargets() {
        this.deleteSubscriptions();
    }

    private deleteSubscriptions() {
        this.moveSubscription.unsubscribe();
        this.chaseSubscription.unsubscribe();
    }

    private setDestination(location: Coordinates2D) {
        this.widget.getBehavior('IsoCharacter').setDestination({
            x: location[0],
            z: location[1]
        });
    }

    private whileMovingUpdateLocation() {
        this.moveSubscription = this.moveEvents.subscribe({
            next: (coords: Coordinates2D) => {
                let hasMoved = !_.isEqual(coords, this.lastLocation)
                if( hasMoved) {
                    this.updateLocation(coords);
                }
                else {
                    this.moveSubscription.unsubscribe();
                }
            },
            error: err => console.error("Observer got error: " + err),
            complete: () => { }
        })
    }

    private updateLocation(coords: Coordinates2D) {
        let req = new MoveRequest();
        req.location = coords;
        this.lastLocation = coords;
        this.unit.handle(req);
    }

    chase(target: WadeRepresentation) {
        this.abandonExistingTargets();
        this.chaseTarget(target);
    }

    private chaseTarget(target: WadeRepresentation) {
        this.chaseSubscription = this.chaseEvents.subscribe({
           next: () => {
               this.widget.getBehavior('IsoCharacter').goToObject(target.widget);
           },
           error: err => console.error("Observer got error: " + err),
           complete: () => {} 
        });

        this.moveSubscription = this.moveEvents.subscribe({
            next: (coords) => {
                let hasMoved = !_.isEqual(coords, this.lastLocation)
                if(hasMoved) {
                    this.updateLocation(coords);
                }
            },
            error: err => console.error("Observer got error: " + err),
            complete: () => {}
        });
    }
}