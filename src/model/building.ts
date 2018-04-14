import Damageable from "../interfaces/damageable";
import AbstractBuilding from "../custom_types/abstract-building";
import BuildingStruct from "./data/building-struct";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import Identifiable from "../interfaces/identifiable";
import Drawable from "../interfaces/drawable";
import AbstractRepresentation from "../interfaces/abstract-representation";
import AbstractRepresentationFactory from "../interfaces/abstract-representation-factory";


export default class Building implements AbstractBuilding, GamePlayHandler, Identifiable, Drawable {
    private rep: AbstractRepresentation;
    private factory: AbstractRepresentationFactory;
    constructor (private id: number, private player: GamePlayHandler, private properties: BuildingStruct ) {
        
    }

    setFactory(factory: AbstractRepresentationFactory) {
        this.factory = factory;
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

    render() {
        this.rep = this.factory.make(this.properties.type, this);
    }

}