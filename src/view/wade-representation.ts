import Representation from "./interfaces/representation";
import Coordinates2D from "../model/types/coodinates-2d";

declare var wade: any;
declare var TextSprite: any;
declare var SceneObject: any;
declare var Sprite: any;
declare var Animation: any;
declare var IsoCharacter: any;
declare var Path: any;
declare var PhysicsObject: any;
declare var TilemapCharacter: any;


export default abstract class WadeRepresentation implements Representation {
    // breaks encapsulation. All users of the class should use
    // only the Representation interface.
    public widget: typeof SceneObject;

    abstract travelTo(location: Coordinates2D);
    abstract chase(rep: WadeRepresentation);
    abstract die();
}