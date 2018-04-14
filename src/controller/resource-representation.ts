import AbstractRepresentation from "../interfaces/abstract-representation";
import { SceneObject, wade } from "../custom_types/wade";
import GamePlayHandler from "../interfaces/gameplay-handler";
import * as Rx from "rxjs-es";
import Mouse from "./mouse";




export default class ResourceRepresentation implements AbstractRepresentation {
    private clickEvents: Rx.Observable<any>;
    private otherEvents: Rx.Observable<any>;
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
                this.attemptToGather();
            } else if (value.button === Mouse.middle) {
                this.attemptToRecycle();
            } else {

            }
        } );
    }

    attemptToSelect() {

    }

    attemptToAttack() {
        // Not implemented. Resources cannot be attacked.
    }

    attemptToGather() {
    
    }

    attemptToMoveTo() {
        // Not implemented. Resources are not moved to.
    }

    attemptToRecycle() {

    }
}