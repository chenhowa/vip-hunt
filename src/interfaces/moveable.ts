type Coordinate2D = [number, number];

interface Moveable {
    move(coord: Coordinate2D );
    getSpeed(): number;
}

export { Moveable };
