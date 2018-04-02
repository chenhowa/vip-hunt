import { Identifiable } from "../interfaces/identifiable";
import { GameBuilding } from "../custom_types/game-building";
import { GameUnit } from "../custom_types/game-unit";
import { GameUnitFactory } from "../factories/game-unit-factory";
import { GameBuildingFactory } from "../factories/game-building-factory";

class PlayerState implements Identifiable {
    private units: Map<number, GameUnit>;
    private buildings: Map<number, GameBuilding>;
    constructor(private id: number) {

    }

    getId() {
        return this.id;
    }

    getUnit(id: number) {

    }

    getUnits() {
        return this.units.values();
    }

    getBuilding(id: number) {

    }
    getBuildings() {
        return this.buildings.values();
    }

    insertUnit(unit: GameUnit) {
        this.units.set(unit.getId(), unit);
    }

    insertBuilding(building: GameBuilding) {
        this.buildings.set(building.getId(), building);
    }

}

export { PlayerState };