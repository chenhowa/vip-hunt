import Player from "../../src/model/interfaces/player";
import { assertTrue } from "../utils/assert";
import * as _ from "lodash";

export default class GamePlayer implements Player {

    private units: Map<number, number> = new Map();
    private buildings: Map<number, number> = new Map();
    private activeUnits: number[] = new Array();
    private activeBuildings: number[] = new Array();
    
    constructor(private id: number) {

    }

    hasUnit(id: number) {
        return this.units.has(id);
    }

    hasBuilding(id: number) {
        return this.buildings.has(id);
    }

    getActiveUnits() {
        return this.activeUnits;
    }

    addActiveUnit(id: number) {
        assertTrue(this.hasUnit(id), "GamePlayer.addActiveUnit: Does not have unit: " + id);
        this.activeUnits.push(id);
    }

    hasActiveUnit(id: number) {
        return _.includes(this.activeUnits, id);
    }

    clearActiveUnits() {
        this.activeUnits = [];
    }

    getActiveBuildings() {
        return this.activeBuildings;
    }

    addActiveBuilding(id: number) {
        assertTrue(this.hasBuilding(id), "GamePlayer.addActiveBuilding error: Does not have building: " + id);
        this.activeBuildings.push(id);
    }

    hasActiveBuilding(id: number) {
        return _.includes(this.activeBuildings, id);
    }

    clearActiveBuildings() {
        this.activeBuildings = [];
    }

    addUnit(id: number) {
        this.units.set(id, id);
    }

    removeUnit(id: number) {
        this.units.delete(id);
    }

    addBuilding(id: number) {
        this.buildings.set(id, id);
    }

    removeBuilding(id: number) {
        this.buildings.delete(id);
    }

    hasNumUnits(num: number) {
        return this.units.size === num;
    }

    hasNumBuildings(num: number) {
        return this.buildings.size === num;
    }

    hasId(id: number) {
        return this.id === id;
    }

}