
import UnitStruct from "./unit-struct";
import Coordinates2D from "../custom_types/coordinates-2d";
import AbstractUnit from "../custom_types/abstract-unit";
import Damageable from "../interfaces/damageable";
import Harvestable from "../interfaces/harvestable";
import Ownable from "../interfaces/ownable";

export default class Unit implements AbstractUnit, Ownable {
    private owner: AbstractPlayer;
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