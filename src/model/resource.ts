import ResourceStruct from "./resource-struct";
import AbstractResource from "../custom_types/abstract-resource";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import Identifiable from "../interfaces/identifiable";


export default class Resource implements AbstractResource, GamePlayHandler, Identifiable {
    constructor(private id: number, private player: GamePlayHandler, private properties: ResourceStruct ) {

    }

    getHarvestedBy(amount: number) {
        this.properties.amount -= amount;
    }

    handleRequest(request: GamePlayRequest) {
        let kind = request.getKind();
    }
    
    getId() {
        return this.id;
    }
}