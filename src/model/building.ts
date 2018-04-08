import Damageable from "../interfaces/damageable";
import AbstractBuilding from "../custom_types/abstract-building";
import BuildingStruct from "./building-struct";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import Identifiable from "../interfaces/identifiable";


export default class Building implements AbstractBuilding, GamePlayHandler, Identifiable {
    constructor (private id: number, private player: GamePlayHandler, private properties: BuildingStruct ) {
        
    }

    dealDamage(target: Damageable ) {
        target.takeDamage(this.properties.attackPoints );
    }

    takeDamage(damage: number) {
        this.properties.healthPoints -= damage;
    }

    handleRequest(request: GamePlayRequest) {
        let kind = request.getKind();
    }

    getId() {
        return this.id;
    }

}