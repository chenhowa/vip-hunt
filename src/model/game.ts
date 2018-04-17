import GameMemento from "./interfaces/game-memento";
import Unit from "./interfaces/unit";
import RequestHandler from "./interfaces/request-handler";
import { Request, RequestKind } from "./interfaces/request";
import UnitRemoveRequest from "./requests/unit-remove-request";
import Building from "./interfaces/building";
import BuildingRemoveRequest from "./requests/building-remove-request";
import Resource from "./interfaces/resource";
import ResourceRemoveRequest from "./requests/resource-remove-request";
import Player from "./interfaces/player";

import PlayerRemoveRequest from "./requests/player-remove-request";
import { assertExpectedEqualsActual, assertTrue } from "../utils/assert";

export default class Game implements RequestHandler{
    private numPlayers: number;
    private activePlayerId: number;
    private units: Map<number, Unit> = new Map();
    private buildings: Map<number, Building> = new Map();
    private resources: Map<number, Resource> = new Map();
    private players: Map<number, Player> = new Map();

    static withPlayers(numPlayers: number, activePlayerId: number) {
        let game = new Game();
        game.numPlayers = numPlayers;
        game.activePlayerId = activePlayerId;

        assertTrue(numPlayers >= 0, "Game.withPlayers error: numPlayers < 0");
        assertTrue(activePlayerId < numPlayers, "Game.withPlayers: activePlayerId >= numPlayers");
        assertTrue(activePlayerId >= 0, "Game.withPlayers: activePlayerId < 0");

        return game;
    }

    static fromMemento(memento: GameMemento) {
        let game = new Game();
        game.numPlayers = memento.numPlayers;
        game.activePlayerId = memento.activePlayerId;

        assertTrue(memento.numPlayers >= 0, "Game.fromMemento error: numPlayers < 0");
        assertTrue(memento.activePlayerId < memento.numPlayers, "Game.fromMemento error: activePlayerId >= numPlayers");
        assertTrue(memento.activePlayerId >= 0, "Game.fromMemento error: activePlayerId < 0");

        return game;
    }

    hasActivePlayer(id: number) {
        return this.activePlayerId === id;
    }

    hasNumPlayers(number: number) {
        return this.players.size === number;
    }

    hasNumUnits(num: number) {
        return this.units.size === num;
    }

    hasNumBuildings(num: number) {
        return this.buildings.size === num;
    }

    addUnit(unit: Unit, id: number) {
        assertTrue(unit.hasId(id), "Game.addUnit error: unit does not have id: " + id);
        this.units.set(id, unit);
    }

    hasUnit(id: number) {
        return this.units.has(id);
    }

    handle(req: Request) {
        if(req.getKind() === RequestKind.UnitRemove && req instanceof UnitRemoveRequest) {
            this.units.delete(req.getId() );
        }
        else if (req.getKind() === RequestKind.BuildingRemove && req instanceof BuildingRemoveRequest) {
            this.buildings.delete(req.getId() );
        }
        else if (req.getKind() === RequestKind.ResourceRemove && req instanceof ResourceRemoveRequest) {
            this.resources.delete(req.getId() );
        }
        else if (req.getKind() === RequestKind.PlayerRemove && req instanceof PlayerRemoveRequest) {
            this.players.delete(req.getId() );
        }
        else {

        }
    }

    addBuilding(building: Building, id: number) {
        assertTrue(building.hasId(id), "Game.addBuilding error: building does not have id: " + id);
        this.buildings.set(id, building);
    }

    hasBuilding(id: number) {
        return this.buildings.has(id);
    }

    addResource(resource: Resource, id: number) {
        assertTrue(resource.hasId(id), "Game.addResource error: resource does not have id " + id);
        this.resources.set(id, resource);
    }

    hasResource(id: number) {
        return this.resources.has(id);
    }

    addPlayer(player: Player, id: number) {
        assertTrue(player.hasId(id), "Game.addPlayer error: player does not have id " + id);

        this.players.set(id, player);
        this.numPlayers++;
    }

    hasPlayer(id: number) {
        return this.players.has(id);
    }
}
