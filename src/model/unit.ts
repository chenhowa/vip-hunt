import Damageable from "../interfaces/damageable";
import Harvester from "../interfaces/harvester";
import Damager from "../interfaces/damager";
import Moveable from "../interfaces/moveable";
import UnitStruct from "./unit-struct";
import Harvestable from "../interfaces/harvestable";
import Coordinates2D from "../custom_types/coordinates-2d";

export default class Unit implements Damageable, Damager, Harvester, Moveable {

    constructor(private properties: UnitStruct) {

    }

    dealDamage(target: Damageable) {
        target.takeDamage(this.properties.attackPoints);
    }


    takeDamage(damage: number) {
        this.properties.healthPoints -= damage;
    }

    harvest( target: Harvestable ) {
        target.getHarvestedBy(this.properties.amountPerGather);
    }

    move( newLocation: Coordinates2D) {
        this.properties.coordinates = newLocation;
    }

}