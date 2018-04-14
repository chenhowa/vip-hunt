import ResourceStruct from "./data/resource-struct";
import AbstractResource from "../custom_types/abstract-resource";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import Identifiable from "../interfaces/identifiable";
import Drawable from "../interfaces/drawable";
import AbstractRepresentation from "../interfaces/abstract-representation";
import AbstractRepresentationFactory from "../interfaces/abstract-representation-factory";


export default class Resource implements AbstractResource, GamePlayHandler, Identifiable, Drawable {
    private rep: AbstractRepresentation;
    private factory: AbstractRepresentationFactory;

    constructor(private id: number, private player: GamePlayHandler, private properties: ResourceStruct ) {

    }

    setFactory(factory: AbstractRepresentationFactory) {
        this.factory = factory;
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

    render() {
        this.rep = this.factory.make(this.properties.type, this);
    }
}