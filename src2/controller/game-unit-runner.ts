import { SceneObject } from "../custom_types/wade";
import { GameUnit } from "../custom_types/game-unit";
import { Drawable } from "../interfaces/drawable";
import { Representation } from "../interfaces/representation";
import { RepresentationFactory } from "../factories/representation-factory";

class GameUnitRunner implements GameUnit, Drawable {
    private rep: Representation | null;
    constructor(private unit: GameUnit, private representationFactory: RepresentationFactory) {
        this.rep = null;
    }

    getUnitType() {
        return this.unit.getUnitType();
    }

    getId() {
        return this.unit.getId();
    }

    getOwnerId() {
        return this.unit.getOwnerId();
    }

    getAttackPoints() {
        return this.unit.getAttackPoints();
    }

    getHealthPoints() {
        return this.unit.getHealthPoints();
    }

    getSpeedPoints() {
        return this.unit.getSpeedPoints();
    }

    getAmountPerGather() {
        return this.unit.getAmountPerGather();
    }

    getInteractionRange() {
        return this.unit.getInteractionRange();
    }

    getVisionRadius() {
        return this.unit.getVisionRadius();
    }

    getCoordinates2D() {
        return this.unit.getCoordinates2D();
    }

    takeDamage() {

    }

    move() {

    }

    render() {

    }


}

export { GameUnitRunner };