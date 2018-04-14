import * as Rx from 'rxjs-es/Rx';
import AbstractRepresentation from "../interfaces/abstract-representation";
import { SceneObject, wade } from "../custom_types/wade";
import GamePlayHandler from "../interfaces/gameplay-handler";
import Mouse from './mouse';


export default class BuildingRepresentation implements AbstractRepresentation {

    private clickEvents: Rx.Observable<any>;
    private otherEvents;
    constructor(private sceneObject: SceneObject, private owner: GamePlayHandler) {
        this.clickEvents = new Rx.Observable( observer => {
            let handler = (event) => {
                observer.next(event);
                return true;
            };
            this.sceneObject.onClick = handler;
            wade.addEventListener(this.sceneObject, "onClick");
            return () => wade.removeEventListener(this.sceneObject, 'onClick');
        });

        this.clickEvents.subscribe((value) => {
            if(value.button === Mouse.left) {
                this.attemptToSelect();
            } else if(value.button === Mouse.right) {
                this.attemptToAttack();
            } else if (value.button === Mouse.middle) {
                this.attemptToRecycle();
            } else {

            }
        } );
    }

    attemptToAttack() {

    }

    attemptToGather() {

    }

    attemptToSelect() {

    }

    attemptToMoveTo() {

    }

    attemptToRecycle() {
        
    }
}