import Coordinates2D from "../custom_types/coordinates-2d";

export default interface Moveable {
    move( targetLocation: Coordinates2D );
}

