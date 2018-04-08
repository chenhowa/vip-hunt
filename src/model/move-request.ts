import GamePlayRequest from "../interfaces/gameplay-request";
import GamePlayRequestType from "../enums/gameplay-request-type";
import Coordinates2D from "../custom_types/coordinates-2d";



export default class MoveRequest implements GamePlayRequest {
    constructor(private coords: Coordinates2D) {


    }

    getKind() {
        return GamePlayRequestType.Move;
    }

    getNewCoords(): Coordinates2D {
        return this.coords;
    }
}