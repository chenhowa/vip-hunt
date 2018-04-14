
import Coordinates2D from "../../custom_types/coordinates-2d";
import UnitType from "../../enums/unit-type";

export default class UnitStruct {
    public id: number = -1;
    public ownerId: number = -1;
    public attackPoints: number = 0;
    public defensePoints: number = 0;
    public healthPoints: number = 0;
    public speedPoints: number = 0;
    public amountPerGather: number = 0;
    public interactionRange: number = 0;
    public visionRadius: number = 0;
    public coordinates: Coordinates2D = [-1, -1];
    public type: UnitType = UnitType.Untyped;
}
