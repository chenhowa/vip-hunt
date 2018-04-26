import WadeRepresentation from "./wade-representation";
import Coordinates2D from "../model/types/coodinates-2d";
import RequestHandler from "../model/interfaces/request-handler";


declare var SceneObject: any;



export default class BuildingRepresentation extends WadeRepresentation {



    constructor(widget: typeof SceneObject, private building: RequestHandler) {
        super();
        this.widget = widget;
    }

    die() {
        // No implementation.
        // Currently buildings do not have a death animation (like collapsing into flames).
    }

    chase(target: WadeRepresentation) {
        //Currently buildings do not chase or move.
    }

    travelTo(location: Coordinates2D) {
        //currently buildings to not chase or move.
    }
}