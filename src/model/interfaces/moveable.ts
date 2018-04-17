import Coordinates2D from "../types/coodinates-2d";



export default interface Moveable {
    move(newLocation: Coordinates2D );
    isAt(location: Coordinates2D): boolean;
}