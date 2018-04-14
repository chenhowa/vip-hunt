import AbstractUnit from "../custom_types/abstract-unit";
import AbstractBuilding from "../custom_types/abstract-building";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import GamePlayRequestType from "../enums/gameplay-request-type";
import DieRequest from "./requests/die-request";
import AttackRequest from "./requests/attack-request";
import Identifiable from "../interfaces/identifiable";
import Damageable from "../interfaces/damageable";
import AbstractPlayer from "../interfaces/abstract-player";
import Drawable from "../interfaces/drawable";

export default class Player implements AbstractPlayer, GamePlayHandler, Identifiable, Drawable {
    private units: Map<number, AbstractUnit & Drawable> = new Map();
    private buildings: Map<number, AbstractBuilding & Drawable> = new Map();

    private activeGameObject: AbstractUnit | AbstractBuilding | null;

    constructor(private id: number, private game: GamePlayHandler) {
        this.activeGameObject = null;
    }

    render() {
        this.renderUnits();
        this.renderBuildings();
    }

    private renderUnits() {
        let iterator = this.units.values();
        while(true) {
            let result = iterator.next();
            if(result.done) {
                break;
            }
            let unit = result.value;
            unit.render();
        }
    }

    private renderBuildings() {
        let iterator = this.buildings.values();
        while(true) {
            let result = iterator.next();
            if(result.done) {
                break;
            }
            let building = result.value;
            building.render();
        }
    }

    hasUnits() {
        return this.units.size !== 0;
    }

    hasBuildings() {
        return this.buildings.size !== 0;
    }

    addUnit(unit: AbstractUnit & Identifiable & Drawable) {
        this.units.set(unit.getId(), unit);
    }

    addBuilding(building: AbstractBuilding & Identifiable & Drawable) {
        this.buildings.set(building.getId(), building);
    }

    setActiveUnit(id: number) {
        this.activeGameObject = this.getUnit(id);
    }

    setActiveBuilding(id: number) {
        this.activeGameObject = this.getBuilding(id);
    }

    getId() {
        return this.id;
    }

    dealDamage(target: Damageable) {
        if(this.activeGameObject === null) {
            throw Error("attack: no active game object!");
        } else {
            this.activeGameObject.dealDamage(target);
        }
    }

    getUnit(id: number) {
        let unit = this.units.get(id);
        if( typeof unit === "undefined" ) {
            throw Error("getUnit: Unit not found!");
        } else {
            return unit;
        }
    }

    getBuilding(id: number) {
        let building = this.buildings.get(id);
        if(typeof building === "undefined" ) {
            throw Error("getBuilding: Building not found");
        } else {
            return building;
        }
    }

    handleRequest(request: GamePlayRequest) {
        let kind = request.getKind();

        if( kind === GamePlayRequestType.Die && request instanceof DieRequest ) {
            let id = request.getId();
            let objectKind = request.getGameObjectKind();
            try {
                this.remove(id, objectKind);
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            this.game.handleRequest(request);
        }
    }

    private remove(id: number, objectKind: string) {
        if(objectKind === "unit") {
            this.removeUnit(id);
        } else if(objectKind === "building") {
            this.removeBuilding(id);
        } else {
            throw Error("remove: object kind not recognized!");
        }
    }

    private removeUnit(id: number) {
        this.units.delete(id);
    }

    private removeBuilding(id) {
        this.buildings.delete(id);
    }
}