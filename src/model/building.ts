import Damageable from "../interfaces/damageable";
import AbstractBuilding from "../custom_types/abstract-building";
import BuildingStruct from "./building-struct";


export default class Building implements AbstractBuilding {
    constructor (private properties: BuildingStruct ) {
        
    }

    dealDamage(target: Damageable ) {
        target.takeDamage(this.properties.attackPoints );
    }

    takeDamage(damage: number) {
        this.properties.healthPoints -= damage;
    }

}