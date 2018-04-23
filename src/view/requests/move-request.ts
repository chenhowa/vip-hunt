import { Request, RequestKind } from "../../model/interfaces/request";
import Coordinates2D from "../../model/types/coodinates-2d";


export default class MoveRequest implements Request {
    public location: Coordinates2D = [-1, -1];
    public id: number = -1;

    getKind() {
        return RequestKind.Move;
    }




}