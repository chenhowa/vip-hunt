import AbstractRepresentationFactory from "../interfaces/abstract-representation-factory";
import UnitType from "../enums/unit-type";
import BuildingType from "../enums/building-type";
import ResourceType from "../enums/resource-type";
import UnitRepresentation from "../controller/unit-representation";
import { SceneObject } from "../custom_types/wade";
import SceneObjectConstruction from "../controller/scene-object-construction";
import GamePlayHandler from "../interfaces/gameplay-handler";


export default class RepresentationFactory implements AbstractRepresentationFactory {
    make(type: UnitType | BuildingType | ResourceType, owner: GamePlayHandler) {
        let rep: UnitRepresentation;
        if(type === UnitType.Archer) {
            rep = this.makeArcher(owner);
        } else if (type === UnitType.ArcherCalvary) {
            rep = this.makeArcherCalvary(owner);
        } else if (type === UnitType.DrummerBoy) {
            rep = this.makeDrummerBoy(owner);
        } else if (type === UnitType.Gatherer) {
            rep = this.makeGatherer(owner);
        } else if (type === UnitType.SpearCalvary) {
            rep = this.makeSpearCalvary(owner);
        } else if (type === UnitType.Swordsman) {
            rep = this.makeSwordsman(owner);
        } else if (type === UnitType.VIP) {
            rep = this.makeVIP(owner);
        } else if (type === BuildingType.Barracks) {
            rep = this.makeBarracks(owner);
        } else if (type === BuildingType.Stables) {
            rep = this.makeStables(owner);
        } else if (type === BuildingType.Tower) {
            rep = this.makeTower(owner);
        } else if (type === BuildingType.TownHall) {
            rep = this.makeTownHall(owner);
        } else if (type === ResourceType.Food) {
            rep = this.makeFood(owner);
        } else if (type === ResourceType.Stone) {
            rep = this.makeStone(owner);
        } else if (type === ResourceType.Wood) {
            rep = this.makeWood(owner);
        } else {
            throw Error("Unknown unit/building/resource type!");
        }

        return rep;
    }

    private makeArcher(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.archer(), owner);
    }

    private makeArcherCalvary(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.archerCalvary(), owner);
    }

    private makeSwordsman(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.swordsman(), owner);
    }

    private makeDrummerBoy(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.drummerBoy(), owner);
    }

    private makeVIP(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.VIP(), owner);
    }

    private makeSpearCalvary(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.spearCalvary(), owner);
    }

    private makeGatherer(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.gatherer(), owner);
    }

    private makeBarracks(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.barracks(), owner);
    }

    private makeStables(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.stables(), owner);
    }

    private makeTownHall(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.townHall(), owner);
    }

    private makeTower(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.tower(), owner);
    }

    private makeStone(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.stone(), owner);
    }

    private makeWood(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.wood(), owner);
    }

    private makeFood(owner: GamePlayHandler) {
        return new UnitRepresentation(SceneObjectConstruction.food(), owner);
    }
}
