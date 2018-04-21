import WadeRepresentation from "./wade-representation";
import { SceneObjectInterface } from "./interfaces/scene-object-interface";
import Coordinates2D from "../model/types/coodinates-2d";
import RequestHandler from "../model/interfaces/request-handler";





export default class BuildingRepresentation extends WadeRepresentation {



    constructor(widget: SceneObjectInterface, private building: RequestHandler) {
        super();
        this.widget = widget;
    }

    chase(target: WadeRepresentation) {
        //Currently buildings do not chase or move.
    }

    travelTo(location: Coordinates2D) {
        //currently buildings to not chase or move.
    }
}