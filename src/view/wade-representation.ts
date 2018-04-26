import Representation from "./interfaces/representation";
import Coordinates2D from "../model/types/coodinates-2d";

declare var SceneObject: any;


export default abstract class WadeRepresentation implements Representation {
    // breaks encapsulation. All users of the class should use
    // only the Representation interface.
    public widget: typeof SceneObject;

    abstract travelTo(location: Coordinates2D);
    abstract chase(rep: WadeRepresentation);
    abstract die();
}