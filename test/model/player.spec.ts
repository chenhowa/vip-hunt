import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";

import Player from "../../src/model/player";
import MockGamePlayHandler from "../mocks/mock-gameplay-handler";
import MockAbstractUnit from "../mocks/mock-abstract-unit";
import MockAbstractBuilding from "../mocks/mock-abstract-building";
import AbstractUnit from "../../src/custom_types/abstract-unit";
import Identifiable from "../../src/interfaces/identifiable";
import AbstractBuilding from "../../src/custom_types/abstract-building";
import DieRequest from "../../src/model/die-request";

let player: Player;
let gameUnit: (AbstractUnit | AbstractBuilding);
let gameBuilding: (AbstractBuilding | AbstractBuilding);

let defaultUnitId = 0;
let defaultBuildingId = 1;

let unitSpy;


describe("Player class correctly", () => {
    it("gets correct existing objects", () => { 
        givenInitialPlayer();
        getUnitAndBuilding();
        expectUnitAndBuildingToHaveCorrectIds();

    });

    function getUnitAndBuilding() {
        gameUnit = player.getUnit(defaultUnitId);
        gameBuilding = player.getBuilding(defaultBuildingId);
    }

    function expectUnitAndBuildingToHaveCorrectIds() {
        if(gameUnit instanceof MockAbstractUnit) {
            expect(gameUnit.getId()).to.eql(defaultUnitId);
        } else {
            expect(0).to.eql(1);
        }
        if (gameBuilding instanceof MockAbstractBuilding) {
            expect(gameBuilding.getId()).to.eql(defaultBuildingId);
        } else {
            expect(0).to.eql(1);
        }
    }

    it( "throws when the objects do not exist", () => {
        givenInitialPlayer();
        expectInvalidCallsToThrow();
    } );

    function expectInvalidCallsToThrow() {
        expect(getInvalidUnit).to.throw;
        expect(getInvalidBuilding).to.throw;
    }

    function getInvalidUnit() {
        player.getUnit(defaultUnitId - 1);
    }

    function getInvalidBuilding() {
        player.getBuilding(defaultBuildingId - 1);
    }

    it( "handles Die requests", () => {
        givenInitialPlayer();
        playerHandlesUnitDieRequest();
        expectUnitDieRequestWasFulfilled();

        givenInitialPlayer();
        playerHandlesBuildingDieRequest();
        expectBuildingDieRequestWasFulfilled();

    });

    function playerHandlesUnitDieRequest() {
        let request = DieRequest.forUnit(defaultUnitId);
        player.handleRequest(request);
    }

    function expectUnitDieRequestWasFulfilled() {
        expect(player.hasUnits()).to.eql(false);
    }

    function playerHandlesBuildingDieRequest() {
        let request = DieRequest.forBuilding(defaultBuildingId);
        player.handleRequest(request);
    }

    function expectBuildingDieRequestWasFulfilled() {
        expect(player.hasBuildings()).to.eql(false);
    }

    it("deals damage", () => {
        givenInitialPlayer();
        playerAttacksBuilding();
        expectDamageWasDealt();

        givenInitialPlayer();
        playerAttacksUnit();
        expectDamageWasDealt();
    });

    function playerAttacksBuilding() {
        let building = new MockAbstractBuilding(defaultBuildingId);
        unitSpy = spy(player.getUnit(defaultUnitId), 'dealDamage');

        player.dealDamage(building);
    }

    function expectDamageWasDealt() {
        expect(unitSpy.callCount).to.eql(1);
        unitSpy.restore();
    }

    function playerAttacksUnit() {
        let unit = new MockAbstractUnit(defaultUnitId);
        unitSpy = spy(player.getUnit(defaultUnitId), 'dealDamage');
        player.dealDamage(unit);
    }

});

function givenInitialPlayer() {
    player = new Player(0, new MockGamePlayHandler);
    player.addUnit(new MockAbstractUnit(defaultUnitId));
    player.addBuilding(new MockAbstractBuilding(defaultBuildingId));
    player.setActiveUnit(defaultUnitId);
}
