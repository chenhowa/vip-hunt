import { GameResource } from "../custom_types/game-resource";
import * as _ from "lodash";

class Resource
    implements
        GameResource
{
    constructor(private id: number, private amount: number) {

    }

    static fromObject(object: any) : Resource {
        /*
            TO construct a Resource from an Object, initialize a default Resource,
            check that the object has the required properties, set the
            required properties, set any optional properties present, and then
            return the Resource.
        */

        let newResource = Resource.default();
        checkObjectHasRequiredProperties(object);
        newResource.setRequiredProperties(object);
        newResource.setOptionalProperties(object);

        return newResource;
    }

    static default() : Resource {
        return new Resource(-1, -1);
    }

    getAmount() {
        return this.amount;
    }

    getId() {
        return this.id;
    }

    reduceAmountBy(gathered: number) {
        this.amount -= gathered;
    }

    private setOptionalProperties(object: any) {
        if(_.has(object, "id") ) {
            this.id = object.id;
        }
    }
    
    private setRequiredProperties(object: any) {
        this.amount = object.amount;
    }
}

function checkObjectHasRequiredProperties(object: any) {
    if( !_.has(object, "amount") ){
        throw Error("Resource.fromObject: object does not have amount");
    }
}

export { Resource };