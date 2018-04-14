import AbstractBuilding from "../../src/custom_types/abstract-building";
import Identifiable from "../../src/interfaces/identifiable";
import Damageable from "../../src/interfaces/damageable";
import Drawable from "../../src/interfaces/drawable";



export default class MockAbstractBuilding implements AbstractBuilding, Identifiable, Drawable {
    constructor(private id: number) {

    }

    dealDamage(target: Damageable) {

    }

    takeDamage(damage: number) {

    }

    getId() {
        return this.id;
    }

    render() {
        
    }
}