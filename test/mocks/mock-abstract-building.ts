import AbstractBuilding from "../../src/custom_types/abstract-building";
import Identifiable from "../../src/interfaces/identifiable";
import Damageable from "../../src/interfaces/damageable";



export default class MockAbstractBuilding implements AbstractBuilding, Identifiable {
    constructor(private id: number) {

    }

    dealDamage(target: Damageable) {

    }

    takeDamage(damage: number) {

    }

    getId() {
        return this.id;
    }
}