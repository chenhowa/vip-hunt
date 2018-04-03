import Damager from "../interfaces/damager";
import Damageable from "../interfaces/damageable";
import BuildingStruct from "./building-struct";


export default class Building implements Damager, Damageable {
    constructor (private properties: BuildingStruct ) {
        
    }

    dealDamage(target: Damageable ) {
        target.takeDamage(this.properties.attackPoints );
    }

    takeDamage(damage: number) {
        this.properties.healthPoints -= damage;
    }

}