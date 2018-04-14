import AbstractPlayer from "../../src/interfaces/abstract-player";
import Identifiable from "../../src/interfaces/identifiable";
import AbstractUnit from "../../src/custom_types/abstract-unit";
import AbstractBuilding from "../../src/custom_types/abstract-building";
import MockAbstractUnit from "./mock-abstract-unit";
import MockAbstractBuilding from "./mock-abstract-building";
import Damageable from "../../src/interfaces/damageable";
import Drawable from "../../src/interfaces/drawable";




export default class MockAbstractPlayer
    implements AbstractPlayer, Identifiable, Drawable {
    
    constructor(private id: number) {

    }

    getId() {
        return this.id;
    }

    hasUnits() {
        return true;
    }

    hasBuildings() {
        return false;
    }

    addUnit(unit: AbstractUnit) {

    }

    addBuilding(unit: AbstractBuilding) {
        
    }

    getUnit(id: number) {
        return new MockAbstractUnit();
    }

    getBuilding(id: number) {
        return new MockAbstractBuilding(id);
    }

    dealDamage(target: Damageable) {

    }

    render() {
        
    }

    chaseAndAttackTarget() {

    }

    chaseAndGatherTarget() {
        
    }
}