

import { expect } from "chai";
import "mocha";
import "sinon";

import GameUnit from "../../src/model/game-unit";
import MockDamageable from "../mocks/mock-damageable";
import MockHarvestable from "../mocks/mock-harvestable";
import MoveRequest from "../../src/view/requests/move-request";
import Coordinates2D from "../../src/model/types/coodinates-2d";


describe("GameUnit class unit test", () => {
    it("instantiates", () => {
        let unit = new GameUnit(0);
        expect(unit.hasId(0)).to.be.true;
    });

    it("correctly takes damage", () => {
        let unit = new GameUnit(0);
        unit.takeDamage(5);
        expect(unit.hasHealth(-5));
    });

    it("correctly damages a Damageable", () => {
        let unit = new GameUnit(0);
        let damageable = new MockDamageable();
        damageable.health = 15;
        unit.dealDamage(damageable);
        expect(damageable.health).to.eql(14);
    });

    it("correctly harvests a Harvestable", () => {
        let unit = new GameUnit(0);
        let harvestable = new MockHarvestable();
        harvestable.amount = 15;
        unit.harvest(harvestable);
        expect(harvestable.amount).to.eql(14);
    });

    it("handles requests to move the unit", () => {
        let unit = new GameUnit(0);
        let req = new MoveRequest();
        let location: Coordinates2D = [12, 12];
        req.location = location;
        unit.handle(req);
        expect(unit.isAt(location)).to.be.true;
    });

    it("throws when given an invalid location to move the unit", () => {
        let unit = new GameUnit(0);
        let req = new MoveRequest();
        req.location = [-1, -1];
        expect(function() {
            unit.handle(req)
        }).to.throw();
    });
});