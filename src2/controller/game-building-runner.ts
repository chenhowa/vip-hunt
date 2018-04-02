import { SceneObject } from "../custom_types/wade";
import { GameBuilding } from "../custom_types/game-building";
import { Drawable } from "../interfaces/drawable";
import { RepresentationFactory } from "../factories/representation-factory";

class GameBuildingRunner implements GameBuilding, Drawable {
    private rep: SceneObject | null;
    constructor(private building: GameBuilding, private representationFactory: RepresentationFactory) {
        this.rep = null;
    }

    getBuildingType() {
        return this.building.getBuildingType();
    }

    getId() {
        return this.building.getId();
    }

    getOwnerId() {
        return this.building.getOwnerId();
    }

    getAttackPoints() {
        return this.building.getAttackPoints();
    }

    getHealthPoints() {
        return this.building.getHealthPoints();
    }

    getInteractionRange() {
        return this.building.getInteractionRange();
    }

    getVisionRadius() {
        return this.building.getVisionRadius();
    }

    getCoordinates2D() {
        return this.building.getCoordinates2D();
    }

    takeDamage() {

    }

    render() {

    }
}

export { GameBuildingRunner };