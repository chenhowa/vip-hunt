import { GameUnit } from "../custom_types/game-unit";

interface UnitFactory {
    makeSwordsman(): GameUnit;
    makeArcher(): GameUnit;
    makeVIP(): GameUnit;
    makeGatherer(): GameUnit;
    makeSpearCalvary(): GameUnit;
    makeArcherCalvary(): GameUnit;
}

export { UnitFactory };