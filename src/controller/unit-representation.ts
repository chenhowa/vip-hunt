import AbstractRepresentation from "../interfaces/abstract-representation";
import { SceneObject, wade } from "../custom_types/wade";
import GamePlayHandler from "../interfaces/gameplay-handler";
import Mouse from "../controller/mouse";
import * as Rx from "rxjs-es/Rx";
import AttackRequest from "../model/attack-request";



export default class UnitRepresentation implements AbstractRepresentation {
    private observableClicks: Rx.Observable<any>;
    private alternateObservableEvents: Rx.Observable<any>;
    constructor(private sceneObject: SceneObject, private owner: GamePlayHandler ) {
        this.observableClicks = new Rx.Observable( observer => {
            let handler = (event) => {
                observer.next(event);
                return true;
            };
            this.sceneObject.onClick = handler;
            wade.addEventListener(this.sceneObject, "onClick");
            return () => wade.removeEventListener(this.sceneObject, 'onClick');
        });

        this.observableClicks.subscribe((value) => {
            if(value.button === Mouse.left) {
                this.attemptToSelect();
            } else if(value.button === Mouse.right) {
                this.attemptToAttack();
            } else if (value.button === Mouse.middle) {
                this.attemptToRecycle();
            } else {

            }
        });

        this.alternateObservableEvents.subscribe(value => {

        });
    }

    attemptToMoveTo() {
        // No implementation. Clicking on a Unit does not result in moving to it.
    }

    attemptToAttack() {
        let request = new AttackRequest();
        request.sceneObject = this.sceneObject;
        request.damageable = null;

        this.owner.handleRequest(request);
    }

    attemptToGather() {
        // No implementation. Clicking on a Unit does not result in gathering it.
    }

    attemptToSelect() {

    }
    
    attemptToRecycle() {

    }
}