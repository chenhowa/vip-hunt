import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";

import Game from "../../src/model/game";
import MockGamePlayHandler from "../mocks/mock-gameplay-handler";
import MockAbstractUnit from "../mocks/mock-abstract-unit";
import MockAbstractBuilding from "../mocks/mock-abstract-building";
import AttackRequest from "../../src/model/attack-request";
import MockAbstractPlayer from "../mocks/mock-abstract-player";
import AbstractPlayer from "../../src/interfaces/abstract-player";

let game: Game;
let playerId = 0;
let opponentId = 1;
let unitId = 0;
let buildingId = 1;

let playerSpy;

describe("Game class correctly", () => {
    it("handles Attack requests", () => {
        givenInitialGame();
        gameHandlesAttackRequest();
        expectAttackOccurred();
    });

    function gameHandlesAttackRequest() {
        let request = AttackRequest.fromUnit();
        request.targetId = unitId;
        request.targetPlayerId = opponentId;

        let p = game.getPlayer(playerId);
        playerSpy = spy(p, 'dealDamage');

        game.handleRequest(request);
    }

    function expectAttackOccurred() {
        expect(playerSpy.callCount).to.eql(1);
        playerSpy.restore();
    }
});


function givenInitialGame() {
    game = new Game();
    let player = new MockAbstractPlayer(playerId);
    player.addUnit(new MockAbstractUnit(unitId) );
    player.addBuilding(new MockAbstractBuilding(buildingId));
    game.addPlayer(player);

    let opponent = new MockAbstractPlayer(opponentId);
    opponent.addUnit(new MockAbstractUnit(unitId));
    opponent.addBuilding(new MockAbstractBuilding(buildingId) );
    game.addPlayer( opponent );

    game.setActivePlayer(playerId);
}