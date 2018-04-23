

import GameBuilding from "../../src/model/game-building";


import { expect } from "chai";
import "mocha";
import "sinon";
import MockDamageable from "../mocks/mock-damageable";
import MockHarvestable from "../mocks/mock-harvestable";
import MockRequestHandler from "../mocks/mock-request-handler";
import DieRequest from "../../src/model/requests/die-request";
import BuildingRemoveRequest from "../../src/model/requests/building-remove-request";
import MockWadeRepresentation from "../mocks/mock-wade-representation";
import MockSceneObject from "../mocks/mock-scene-object";

describe("GameBuilding class unit test", () => {
    it("instantiates correctly", () => {
        let building = new GameBuilding(0);
        expect(building.hasId(0));
    });

    it("deals damage to Damageable", () => {
        let building = new GameBuilding(0);
        let damageable = new MockDamageable();
        damageable.health = 15;
        building.dealDamage(damageable);
        expect(damageable.health).to.eql(14);
    });

    it("takes damage correctly", () => {
        let building = new GameBuilding(0);
        building.takeDamage(5);
        expect(building.hasHealth(-5)).to.be.true;
    });

    it("harvests from a Harvestable", () => {
        let building = new GameBuilding(0);
        let harvestable = new MockHarvestable();
        harvestable.amount = 15;
        building.harvest(harvestable);
        expect(harvestable.amount).to.eql(14);
    });

    it("dies on request", () => {
        let building = new GameBuilding(5);
        let handler = new MockRequestHandler();
        building.setGame(handler);
        building.rep = new MockWadeRepresentation(new MockSceneObject());
        building.handle(new DieRequest() );
        if(handler.req instanceof BuildingRemoveRequest) {
            expect(handler.req.getId() ).to.eql(5);
        } else {
            expect(true).to.be.false;
        }
    });
});