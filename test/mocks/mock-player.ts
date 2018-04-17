
import Player from "../../src/model/interfaces/player";
import * as _ from "lodash";


export default class MockPlayer implements Player {
    public units: Map<number, number> = new Map();
    public buildings: Map<number, number> = new Map();
    public activeUnits: number[] = new Array();
    public activeBuildings: number[] = new Array();
    
    constructor(public id: number) {

    }

    getActiveBuildings() {
        return this.activeBuildings;
    }

    addActiveBuilding(id: number) {
        this.activeBuildings.push(id);
    }

    hasActiveBuilding(id: number) {
        return _.includes(this.activeBuildings, id);
    }

    clearActiveBuildings() {
        this.activeBuildings = [];
    }

    hasId(id: number) {
        return this.id === id;
    }

    addUnit(id: number) {
        this.units.set(id, id);
    }

    removeUnit(id: number) {
        this.units.delete(id);
    }

    hasUnit(id: number) {
        return this.units.has(id);
    }

    addBuilding(id: number) {
        this.buildings.set(id, id);
    }

    removeBuilding(id: number) {
        this.buildings.delete(id);
    }

    hasBuilding(id: number) {
        return this.buildings.has(id);
    }

    getActiveUnits() {
        return this.activeUnits;
    }

    addActiveUnit(id: number) {
        this.activeUnits.push(id);
    }

    hasActiveUnit(id: number) {
        return _.includes(this.activeUnits, id);
    }

    clearActiveUnits() {
        this.activeUnits = [];
    }

    hasNumUnits(num: number) {
        return this.units.size === num;
    }

    hasNumBuildings(num: number) {
        return this.buildings.size === num;
    }


}