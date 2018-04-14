import AbstractUnit from "../../src/custom_types/abstract-unit";
import Damageable from "../../src/interfaces/damageable";
import Harvestable from "../../src/interfaces/harvestable";
import Coordinates2D from "../../src/custom_types/coordinates-2d";
import Identifiable from "../../src/interfaces/identifiable";




export default class MockAbstractUnit implements AbstractUnit, Identifiable {
    public hp: number = 100;
    public id: 100;
    constructor() {

    }

    dealDamage(target: Damageable) {

    }

    takeDamage(damage: number) {
        this.hp -= damage;
    }

    harvest(target: Harvestable) {

    }

    move(newCoordinates: Coordinates2D) {

    }

    getId() {
        return this.id;
    }
}