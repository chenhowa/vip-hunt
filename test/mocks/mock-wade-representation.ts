import WadeRepresentation from "../../src/view/wade-representation";
import { SceneObjectInterface } from "../../src/view/interfaces/scene-object-interface";
import Coordinates2D from "../../src/model/types/coodinates-2d";

export default class MockWadeRepresentation extends WadeRepresentation {
    

    constructor(widget: SceneObjectInterface) {
        super();
        this.widget = widget;
    }

    chase(target: WadeRepresentation) {

    }

    travelTo(location: Coordinates2D) {

    }

    die() {
        
    }
}