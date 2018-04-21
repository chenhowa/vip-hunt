import WadeRepresentation from "./wade-representation";
import { SceneObjectInterface } from "./interfaces/scene-object-interface";
import RequestHandler from "../model/interfaces/request-handler";
import Coordinates2D from "../model/types/coodinates-2d";





export default class ResourceRepresentation extends WadeRepresentation {


    constructor(widget: SceneObjectInterface, handler: RequestHandler) {
        super();
        this.widget = widget;
    }

    chase(target: WadeRepresentation) {

    }

    travelTo(location: Coordinates2D) {
        
    }
}