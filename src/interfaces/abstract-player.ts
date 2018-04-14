import Identifiable from "./identifiable";
import AbstractUnit from "../custom_types/abstract-unit";
import AbstractBuilding from "../custom_types/abstract-building";
import Damager from "./damager";
import Damageable from "./damageable";
import Harvestable from "./harvestable";




export default interface AbstractPlayer extends Damager {
    hasUnits(): boolean;
    hasBuildings(): boolean;
    addUnit(unit: AbstractUnit & Identifiable);
    addBuilding(building: AbstractBuilding & Identifiable);
    getUnit(id: number): AbstractUnit;
    getBuilding(id: number): AbstractBuilding;
    chaseAndAttackTarget(target: Damageable);
    chaseAndGatherTarget(target: Harvestable);
}