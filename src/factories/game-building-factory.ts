import { GameBuilding } from "../custom_types/game-building";

interface GameBuildingFactory {
    makeBarracks(): GameBuilding;
    makeStables(): GameBuilding;
    makeTower(): GameBuilding;
    makeTownHall(): GameBuilding;
}

export { GameBuildingFactory };