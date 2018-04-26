import WadeRepresentation from "./wade-representation";
import RequestHandler from "../model/interfaces/request-handler";
import Coordinates2D from "../model/types/coodinates-2d";


declare var SceneObject: any;



export default class ResourceRepresentation extends WadeRepresentation {


    constructor(widget: typeof SceneObject, handler: RequestHandler) {
        super();
        this.widget = widget;
    }

    die() {
        // No implementation. Resources do not currently have a death
        // animation
    }

    chase(target: WadeRepresentation) {
        // No implementation. Resources cannot move.
    }

    travelTo(location: Coordinates2D) {
        // No implementation. Resources cannot move.
    }
}