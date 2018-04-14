import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";


import BuildingStruct from "../../src/model/data/building-struct";
import Building from "../../src/model/building";
import MockGamePlayHandler from "../mocks/mock-gameplay-handler";
import MockAbstractUnit from "../mocks/mock-abstract-unit";

let buildingData: BuildingStruct;
let building: Building;
let copyData: BuildingStruct;
let unit: MockAbstractUnit;

describe("Building class correctly", () => {

    it("takes positive damage", () => {
        givenNewBuilding();
        buildingTakesDamage(20);
        checkDamageWasDone();
    });

    function buildingTakesDamage(damage: number) {
        building.takeDamage(damage);
        copyData.healthPoints -= damage;
    }

    function checkDamageWasDone() {
        expect(copyData).to.eql(buildingData);
    }

    it("takes negative damage", () => {
        givenNewBuilding();
        buildingTakesDamage(-5);
        checkDamageWasDone();
    });

    it("deals damage", () => {
        givenNewBuildingAndUnit();
        let expected = unit.hp;
        buildingDealsDamageToUnit();
        checkDamageWasDealt(expected);
    });

    function givenNewBuildingAndUnit() {
        givenNewBuilding();
        givenMockUnit();
    }

    function buildingDealsDamageToUnit() {
        building.dealDamage(unit);
    }

    function checkDamageWasDealt(expected: number) {
        expect(unit.hp).to.eql(expected - buildingData.attackPoints);
    }
});

function givenNewBuilding() {
    buildingData = new BuildingStruct();
    buildingData.attackPoints = 20;
    buildingData.healthPoints = 5;
    buildingData.defensePoints = 15;
    building = new Building(0, new MockGamePlayHandler(), buildingData);

    copyData = _.cloneDeep(buildingData);
}

function givenMockUnit() {
    unit = new MockAbstractUnit();
}