import { GameBuilding } from "../custom_types/game-building";

interface BuildingFactory {
    makeBarracks(): GameBuilding;
    makeStables(): GameBuilding;
    makeTower(): GameBuilding;
    makeTownHall(): GameBuilding;
}