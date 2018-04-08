import AbstractUnit from "../../src/custom_types/abstract-unit";
import Damageable from "../../src/interfaces/damageable";
import Harvestable from "../../src/interfaces/harvestable";
import Coordinates2D from "../../src/custom_types/coordinates-2d";
import Identifiable from "../../src/interfaces/identifiable";




export default class MockAbstractUnit implements AbstractUnit, Identifiable {

    constructor(private id: number) {

    }

    dealDamage(target: Damageable) {

    }

    takeDamage(damage: number) {

    }

    harvest(target: Harvestable) {

    }

    move(newCoordinates: Coordinates2D) {

    }

    getId() {
        return this.id;
    }
}