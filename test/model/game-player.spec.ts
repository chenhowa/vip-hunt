import { expect } from "chai";
import "mocha";
import "sinon";

import GamePlayer from "../../src/model/game-player";

describe("GamePlayer unit test", () => {
    it("instantiates", () => {
        new GamePlayer(1);
    });

    it("instantiates with correct starting state", () => {
        let id = 6;
        let player = new GamePlayer(id);
        expect(player.hasId(id)).to.be.true;
    });

    it("allows adding units", () => {
        let player = new GamePlayer(6);
        player.addUnit(5);
        expect(player.hasUnit(5)).to.be.true;
        expect(player.hasNumUnits(1)).to.be.true;

    } );

    it("allows removing units", () => {
        let player = new GamePlayer(6);
        let unitId = 5;
        player.addUnit(unitId);
        player.removeUnit(unitId);
        expect(player.hasNumUnits(0)).to.be.true;
    });

    it("allows adding buildings", () => {
        let player = new GamePlayer(6);
        player.addBuilding(5);
        expect(player.hasBuilding(5)).to.be.true;
        expect(player.hasNumBuildings(1)).to.be.true;
    });

    it("allows removing buildings", () => {
        let player = new GamePlayer(6);
        let buildingId = 5;
        player.addBuilding(buildingId);
        player.removeBuilding(buildingId);
        expect(player.hasNumBuildings(0)).to.be.true;
    })

    it("allows adding active buildings", () => {
        let player = new GamePlayer(6);
        let buildingId = 5;
        player.addBuilding(buildingId);
        player.addActiveBuilding(buildingId);
        expect(player.hasActiveBuilding(buildingId)).to.be.true;
    });

    it("allows adding active units", () => {
        let player = new GamePlayer(6);
        let unitId = 5;
        player.addUnit(unitId);
        player.addActiveUnit(unitId);
        expect(player.hasActiveUnit(unitId)).to.be.true;
    });

    it("allows clearing all active units and buildings", () => {
        let player = new GamePlayer(6);
        let pieceId = 5;
        player.addBuilding(pieceId);
        player.addUnit(pieceId);
        player.addActiveUnit(pieceId);
        player.addActiveBuilding(pieceId);
        player.clearActiveUnits();
        player.clearActiveBuildings();
        expect(player.getActiveUnits().length).to.be.eql(0);
        expect(player.getActiveBuildings().length).to.be.eql(0);
    })

    it("rejects adding foreign active Units and active Buildings", () => {
        expect(function() {
            let player = new GamePlayer(6);
            player.addActiveUnit(100);
        }).to.throw();

        expect(function() {
            let player = new GamePlayer(6);
            player.addActiveBuilding(200);
        });
    });

})