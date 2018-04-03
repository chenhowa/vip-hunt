import Harvestable from "../interfaces/harvestable";
import ResourceStruct from "./resource-struct";


export default class Resource implements Harvestable {
    constructor( private properties: ResourceStruct ) {

    }

    getHarvestedBy(amount: number) {
        this.properties.amount -= amount;
    }
    
}