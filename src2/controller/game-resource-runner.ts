import { SceneObject } from "../custom_types/wade";
import { GameResource } from "../custom_types/game-resource";
import { Drawable } from "../interfaces/drawable";
import { Representation } from "../interfaces/representation";
import { RepresentationFactory } from "../factories/representation-factory";

class GameResourceRunner implements GameResource, Drawable {
    private rep: Representation | null;
    constructor(private resource: GameResource, private representationFactory: RepresentationFactory) {
        this.rep = null;
    }

    getResourceType() {
        return this.resource.getResourceType();
    }

    getId() {
        return this.resource.getId();
    }

    getAmount() {
        return this.resource.getAmount();
    }

    reduceAmountBy(amountGathered: number) {
        return this.resource.reduceAmountBy(amountGathered);
    }

    render() {

    }
}

export { GameResourceRunner };