


export interface SceneObjectInterface {
    iso: IsoData;

    getBehavior(name?: string): any;
}

export class IsoData {
    gridCoords: IsoCoordinate = new IsoCoordinate(-1, -1);
}

export class IsoCoordinate {
    x: number;
    z: number;

    constructor(x: number, z: number) {
        this.x = x;
        this.z = z;
    }
}