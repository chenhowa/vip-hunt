import { expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import Game from "../../src/model/game";
import MockGameMemento from "../mocks/mock-game-memento";
import MockUnit from "../mocks/mock-unit";
import MockBuilding from "../mocks/mock-building";
import UnitRemoveRequest from "../../src/model/requests/unit-remove-request";
import BuildingRemoveRequest from "../../src/model/requests/building-remove-request";
import ResourceRemoveRequest from "../../src/model/requests/resource-remove-request";
import PlayerRemoveRequest from "../../src/model/requests/player-remove-request";
import MockResource from "../mocks/mock-resource";
import MockPlayer from "../mocks/mock-player";
import UnitToUnitAttackRequest from "../../src/model/requests/unit-to-unit-attack-request";
import UnitToBuildingAttackRequest from "../../src/model/requests/unit-to-building-attack-request";

describe("Game class unit test", () => {
    it("instantiates", () => {
        let game = new Game();
    });

    it("instantiates with multiple players", () => {
        let game = Game.withPlayers(10, 1);
        expect(game.hasNumPlayers(10)).to.be.true;
        expect(game.hasActivePlayer(1)).to.be.true;
    });

    it("instantiates from a Memento", () => {
        let memento = new MockGameMemento();
        let game = Game.fromMemento(memento);

        expect(game.hasActivePlayer(memento.activePlayerId)).to.be.true;
        expect(game.hasNumPlayers(memento.numPlayers)).to.be.true;
    })

    it("allows units to be added", () => {
        let id = 5;
        let unit = new MockUnit(id);
        let game = Game.withPlayers(10, 1);
        game.addUnit(unit, id);
        expect(game.hasUnit(id)).to.be.true;
        expect(game.hasNumUnits(1)).to.be.true;
    });

    it("allows units to be removed via requests", () => {
        let game = Game.withPlayers(10, 1);
        let id = 5;
        let unit = new MockUnit(5);
        game.addUnit(unit, id);
        game.handle(new UnitRemoveRequest(id) );

        expect(game.hasUnit(id)).to.be.false;
    });

    it("allows buildings to be added", () => {
        let game = Game.withPlayers(10, 1);
        let id = 3;
        let building = new MockBuilding(id);
        game.addBuilding(building, id);
        expect(game.hasBuilding(id)).to.be.true;
        expect(game.hasNumBuildings(1)).to.be.true;
    });

    it("allows buildings to be removed via requests", () => {
        let game = Game.withPlayers(10, 1);
        let id = 3;
        let building = new MockBuilding(id);
        game.addBuilding(building, id);
        game.handle(new BuildingRemoveRequest(id) );
        expect(game.hasBuilding(id)).to.be.false;
    });

    it("allows resources to be added", () => {
        let game = Game.withPlayers(10, 1);
        let id = 4;
        let resource = new MockResource(id);
        game.addResource(resource, id);
        expect(game.hasResource(id)).to.be.true;
    });

    it("allows resources to be removed via requests", () => {
        let game = Game.withPlayers(10, 1);
        let id = 4;
        let resource = new MockResource(id);
        game.addResource(resource, id);
        game.handle(new ResourceRemoveRequest(id) );
        expect(game.hasResource(id)).to.be.false;
    });

    it("allows new players to be added to the game", () => {
        let game = Game.withPlayers(10, 1);
        let id = 20;
        let player = new MockPlayer(id);
        game.addPlayer(player, id);
        expect(game.hasPlayer(id) );
        expect(game.hasNumPlayers(11)).to.be.true;
    });

    it("allows players to be removed via requests", () => {
        let game = Game.withPlayers(10, 1);
        let id = 20;
        let player = new MockPlayer(id);
        game.addPlayer(player, id );
        game.handle(new PlayerRemoveRequest(id));
        expect(game.hasPlayer(id)).to.be.false;
    });

    it("rejects invalid Game.withPlayers calls", () => {
        expect(function() {
            let game = Game.withPlayers(10, 100);
        }).to.throw();

        expect(function() { 
            let game = Game.withPlayers(-1, 50);
        }).to.throw();

        expect(function() {
            let game = Game.withPlayers(0, -1);
        }).to.throw();

        expect(function() {
            let game = Game.withPlayers(10, 3)
        }).to.not.throw();

    });

    it("rejects invalid Game.fromMemento calls", () => {
        expect(function() {
            let memento = new MockGameMemento();
            memento.numPlayers = 10;
            memento.activePlayerId = 100;
            let game = Game.fromMemento(memento);
        }).to.throw();
        expect(function() {
            let memento = new MockGameMemento();
            memento.numPlayers = -1;
            memento.activePlayerId = 50;
            let game = Game.fromMemento(memento );
        }).to.throw();
        expect(function() {
            let memento = new MockGameMemento();
            memento.numPlayers = 0;
            memento.activePlayerId = -1;
            let game = Game.fromMemento(memento);
        }).to.throw();
        expect(function() {
            let memento = new MockGameMemento();
            memento.numPlayers = 10;
            memento.activePlayerId = 3;
            let game = Game.fromMemento( memento );
        }).to.not.throw();
    });

    it("rejects invalid attempts to add resources, buildings, units, and players", () => {
        let game = Game.withPlayers(10, 3);
        expect(function() {
            game.addResource(new MockResource(1), 2)
        }).to.throw();

        expect(function() {
            game.addUnit(new MockUnit(1), 2)
        }).to.throw();

        expect(function() {
            game.addBuilding(new MockBuilding(1), 2)
        }).to.throw();

        expect(function() {
            game.addPlayer(new MockPlayer(1), 2)
        }).to.throw();
    });

    it("organizes chase attack between units when it receives the request", () => {
        let game = Game.withPlayers(10, 3);
        let mockAttacker = new MockUnit(1);
        let mockTarget = new MockUnit(2);
        game.addUnit(mockAttacker, 1);
        game.addUnit(mockTarget, 2);

        let req = new UnitToUnitAttackRequest();
        req.attackerId = 1;
        req.targetId = 2;

        var chase = sinon.spy(mockAttacker.rep, "chase");
        game.handle(req);

        expect(chase.callCount).to.be.eql(1);

        chase.restore();
    });

    it("organizes chase attack between unit and building when it receives the request", () => {
        let game = Game.withPlayers(10, 3);
        let mockAttacker = new MockUnit(1);
        let mockTarget = new MockUnit(2);
        game.addUnit(mockAttacker, 1);
        game.addBuilding(mockTarget, 2);

        let req = new UnitToBuildingAttackRequest();
        req.attackerId = 1;
        req.targetId = 2;

        var chase = sinon.spy(mockAttacker.rep, "chase");
        game.handle(req);

        expect(chase.callCount).to.be.eql(1);

        chase.restore();
    });
});
