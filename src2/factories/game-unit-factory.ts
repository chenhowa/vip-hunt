import { GameUnit } from "../custom_types/game-unit";

interface GameUnitFactory {
    makeSwordsman(): GameUnit;
    makeArcher(): GameUnit;
    makeVIP(): GameUnit;
    makeGatherer(): GameUnit;
    makeSpearCalvary(): GameUnit;
    makeArcherCalvary(): GameUnit;
    makeDrummerBoy(): GameUnit;
}

export { GameUnitFactory };