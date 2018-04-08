
import UnitStruct from "./unit-struct";
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

export default class Unit implements AbstractUnit, GamePlayHandler, Identifiable {
    constructor(private id: number, private player: GamePlayHandler, private properties: UnitStruct) {

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

}