import { Coordinates2D } from "../custom_types/coordinates-2d";

interface ILocatable {
    getCoordinate(): number;
    setCoordinate(): number;
}


interface Locatable2D {
    getCoordinates2D(): Coordinates2D; 
}

export { ILocatable, Locatable2D };
export default ILocatable;
