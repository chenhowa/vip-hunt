import Identifiable from "./identifiable";




export default interface Player extends Identifiable {
    hasUnit(id: number): boolean;
    hasBuilding(id: number): boolean;
    getActiveUnits(): number[];
    addActiveUnit(id: number);
    clearActiveUnits();
    hasActiveUnit(id: number);
    getActiveBuildings(): number[];
    addActiveBuilding(id: number);
    clearActiveBuildings();
    hasActiveBuilding(id: number);
    addUnit(id: number);
    removeUnit(id: number);
    addBuilding(id: number);
    removeBuilding(id: number);
    hasNumUnits(num: number);
    hasNumBuildings(num: number);
}