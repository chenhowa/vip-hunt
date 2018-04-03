import AbstractUnit from "../custom_types/abstract-unit";
import AbstractBuilding from "../custom_types/abstract-building";

export default class PlayerStruct {
    public units: AbstractUnit[] = [];
    public buildings: AbstractBuilding[] = [];
}