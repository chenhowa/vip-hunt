import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";

import Game from "../../src/model/game";
import MockGamePlayHandler from "../mocks/mock-gameplay-handler";
import MockAbstractUnit from "../mocks/mock-abstract-unit";
import MockAbstractBuilding from "../mocks/mock-abstract-building";
import AttackRequest from "../../src/model/requests/attack-request";
import MockAbstractPlayer from "../mocks/mock-abstract-player";
import AbstractPlayer from "../../src/interfaces/abstract-player";
import Identifiable from "../../src/interfaces/identifiable";
import MockResource from "../mocks/mock-resource";
import AbstractResource from "../../src/custom_types/abstract-resource";

let game: Game;
let playerId = 50;
let opponentId = 20;
let unitId = 0;
let buildingId = 1;
let resourceId = 2;

let arbitraryPlayer: AbstractPlayer & Identifiable;
let arbitraryResource: AbstractResource & Identifiable;

describe("Game class correctly", () => {
    it("gets an arbitrary player", () => {
        givenNewGame();
        getPlayer(playerId);
        expectCorrectPlayer();
    });

    function getPlayer(id: number) {
        arbitraryPlayer = game.getPlayerCopy(id);
    }

    function expectCorrectPlayer() {
        expect(playerId).to.eql(arbitraryPlayer.getId() );
    }

    it("gets an arbitrary resource", () => {
        givenNewGame();
        getResource(resourceId);
        expectCorrectResource();
    });

    function getResource(resourceId: number) {
        arbitraryResource = game.getResourceCopy(resourceId);
    }

    function expectCorrectResource() {
        expect(arbitraryResource.getId()).to.eql(resourceId);
    }

    it("adds players to the game", () => {
        let playerId = 12;

        givenNewGame();
        addPlayer();
        expectPlayerWasAdded();

        function addPlayer() {
            game.addPlayer(new MockAbstractPlayer(playerId))
        }

        function expectPlayerWasAdded() {
            expect(game.getPlayerCopy(playerId).getId()).to.eql(playerId);
        }
    });

    it("adds resources to the game", () => {
        let resourceId = 15;
        givenNewGame();
        addResource();
        expectResourceWasAdded();

        function addResource() {
            let resource = new MockResource();
            resource.id = 15;
            game.addResource(resource);
        }

        function expectResourceWasAdded() {
            expect(game.getResourceCopy(resourceId).getId()).to.eql(resourceId);
        }
    });

    it("cannot get invalid data", () => {
        givenNewGame();
        expectInvalidResourceToThrow();
        expectInvalidPlayerToThrow();

        function expectInvalidResourceToThrow() {
            expect(function() {
                game.getResourceCopy(30000)
            }).to.throw;
        }

        function expectInvalidPlayerToThrow() {
            expect(function() {
                game.getPlayerCopy(30000)
            }).to.throw;
        }
    });

    it("handles requests", () => {
        
    })

});


function givenNewGame() {
    let runner = null;
    game = new Game(runner);
    let player = new MockAbstractPlayer(playerId);
    game.addPlayer(player);
    game.setActivePlayer(player.getId());

    let opponent = new MockAbstractPlayer(opponentId);
    game.addPlayer( opponent );

    let resource = new MockResource();
    resource.id = resourceId;
    game.addResource(resource);
}