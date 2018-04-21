import Representation from "./interfaces/representation";
import Coordinates2D from "../model/types/coodinates-2d";
import { SceneObjectInterface } from "./interfaces/scene-object-interface";

export default abstract class WadeRepresentation implements Representation {
    // breaks encapsulation. All users of the class should use
    // only the Representation interface.
    public widget: SceneObjectInterface;

    abstract travelTo(location: Coordinates2D);
    abstract chase(rep: WadeRepresentation);
}