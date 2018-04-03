import Coordinates2D from "../../src/custom_types/coordinates-2d";
import BuildingType from "../../src/enums/building-type";


class BuildingStruct {
    id: number = -1;
    ownerId: number = -1;
    attackPoints: number = 0;
    defensePoints: number = 0;
    healthPoints: number = 0;
    visionRadius: number = 0;
    interactionRange: number = 0;
    coordinates: Coordinates2D = [-1, -1];
    type: BuildingType = BuildingType.Untyped;

}

export default BuildingStruct;