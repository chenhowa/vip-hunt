import Coordinates2D from "../custom_types/coordinates-2d";




export default interface AbstractRepresentation {
    attemptToGather();
    attemptToAttack();
    attemptToSelect();
    attemptToMoveTo();
    attemptToRecycle();
}