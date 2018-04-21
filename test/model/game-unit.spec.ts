

import { expect } from "chai";
import "mocha";
import "sinon";

import GameUnit from "../../src/model/game-unit";
import MockDamageable from "../mocks/mock-damageable";
import MockHarvestable from "../mocks/mock-harvestable";


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
    })
});