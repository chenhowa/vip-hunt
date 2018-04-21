import Coordinates2D from "../../src/model/types/coodinates-2d";
import WadeRepresentation from "../../src/view/wade-representation";
import { SceneObjectInterface, IsoData, IsoCoordinate } from "../../src/view/interfaces/scene-object-interface";



export default class MockSceneObject implements SceneObjectInterface {
    public behavior = new IsoCharacter();
    public iso: IsoData = new IsoData();

    public path: Coordinates2D[] = new Array();
    private currentPathIndex = 0;

    constructor() {
        this.path = [[0, 0], [0, 1], [1, 0], [1, 1]];
    }

    getBehavior(name?: string): IsoCharacter {
        return this.behavior;
    }

    nextLocation() {
        let i = this.currentPathIndex;
        if(i >= this.path.length) {
            throw Error("No next location");
        }

        this.iso.gridCoords = {
            x: this.path[i][0],
            z: this.path[i][1]
        }

        this.currentPathIndex++;
    }
}

interface IsoCoordinates {
    x: number,
    z: number
}

export class IsoCharacter {

    public path: Coordinates2D[] = new Array();
    public pathLength = 5;


    setDestination(location: IsoCoordinates ) {

    }

    goToObject(rep: WadeRepresentation) {

    }
}