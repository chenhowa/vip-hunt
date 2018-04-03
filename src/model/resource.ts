import ResourceStruct from "./resource-struct";
import AbstractResource from "../custom_types/abstract-resource";


export default class Resource implements AbstractResource {
    constructor( private properties: ResourceStruct ) {

    }

    getHarvestedBy(amount: number) {
        this.properties.amount -= amount;
    }
    
}