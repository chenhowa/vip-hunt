import { Coordinates2D } from "../custom_types/coordinates-2d";


interface Moveable {
    move(coord: Coordinates2D );
    getSpeedPoints(): number;
}

export { Moveable };
