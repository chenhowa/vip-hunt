interface ILocatable {
    getCoordinate(): number;
    setCoordinate(): number;
}

type Coordinate2D = [number, number];

interface Locatable2D {
    getCoordinate2D(): Coordinate2D; 
}

export { ILocatable, Locatable2D };
export default ILocatable;
