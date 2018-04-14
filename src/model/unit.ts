
import UnitStruct from "./data/unit-struct";
import Coordinates2D from "../custom_types/coordinates-2d";
import AbstractUnit from "../custom_types/abstract-unit";
import Damageable from "../interfaces/damageable";
import Harvestable from "../interfaces/harvestable";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import Identifiable from "../interfaces/identifiable";
import GamePlayRequestType from "../enums/gameplay-request-type";
import MoveRequest from "./move-request";
import DieRequest from "./die-request";
import Drawable from "../interfaces/drawable";
import AbstractRepresentation from "../interfaces/abstract-representation";
import AbstractRepresentationFactory from "../interfaces/abstract-representation-factory";

export default class Unit implements AbstractUnit, GamePlayHandler, Identifiable, Drawable {
    private rep: AbstractRepresentation;
    private factory: AbstractRepresentationFactory;

    constructor(private id: number, private player: GamePlayHandler, private properties: UnitStruct) {

    }

    setFactory(factory: AbstractRepresentationFactory) {
        this.factory = factory;
    }

    handleRequest(request: GamePlayRequest) {
        let kind = request.getKind();

        if( kind === GamePlayRequestType.Move && request instanceof MoveRequest ) {
            let coords = request.getNewCoords();
            this.move(coords);
        }
        else {
            this.player.handleRequest(request);
        }
    }

    getId() {
        return this.id;
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

    render() {
        this.rep = this.factory.make(this.properties.type, this);
    }

}