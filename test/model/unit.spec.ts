import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";

import UnitStruct from "../../src/model/data/unit-struct";
import Unit from "../../src/model/unit";
import Coordinates2D from "../../src/custom_types/coordinates-2d";
import ResourceStruct from "../../src/model/data/resource-struct";
import Resource from "../../src/model/resource";
import BuildingStruct from "../../src/model/data/building-struct";
import Building from "../../src/model/building";
import MockGamePlayHandler from "../mocks/mock-gameplay-handler";
import MoveRequest from "../../src/model/move-request";

let unitData: UnitStruct;
let preUnitData: UnitStruct;
let unit: Unit;



describe( "Unit class correctly", () => {

    it("takes damage", () => {
        givenInitialUnit();
        unitTakesDamage(5);
        expect(unitData).to.eql(preUnitData);

        givenInitialUnit();
        unitTakesDamage(-10);
        expect(unitData).to.eql(preUnitData);
    });

    function unitTakesDamage(damage: number) {
        unit.takeDamage(damage);
        preUnitData.healthPoints -= damage;
    }

    it("deals damage", () => {
        givenInitialUnit();

        let buildingData = new BuildingStruct();
        let building = new Building(0, new MockGamePlayHandler, buildingData);
        let preBuildingData = _.cloneDeep(buildingData);
        let takeDamageSpy = spy(building, 'takeDamage');

        unit.dealDamage(building);
        preBuildingData.healthPoints -= preUnitData.attackPoints;
        expect(buildingData).to.eql(preBuildingData);
        expect(unitData).to.eql(preUnitData);

        expect(takeDamageSpy.callCount).to.eql(1);

        takeDamageSpy.restore();
    })

    it("moves", () => {
        givenInitialUnit();

        let newCoordinates: Coordinates2D = [10, 5];
        
        unit.move(newCoordinates);
        preUnitData.coordinates = newCoordinates;
        expect(unitData).to.eql(preUnitData);
    });

    it("harvests", () => {
        givenInitialUnit();
        let resourceData = new ResourceStruct();
        let resource = new Resource(0, new MockGamePlayHandler, resourceData);
        let preResourceData = _.cloneDeep(resourceData);

        let getHarvestedBySpy = spy(resource, 'getHarvestedBy');

        unit.harvest(resource);
        preResourceData.amount -= preUnitData.amountPerGather;
        expect(resourceData).to.eql(preResourceData);
        expect(preUnitData).to.eql(unitData);

        expect(getHarvestedBySpy.callCount).to.eql(1);
        getHarvestedBySpy.restore();
    });

    it("handles move requests", () => {
        givenInitialUnit();
        let newCoordinates: Coordinates2D = [-50, -50];
        let request = new MoveRequest(newCoordinates);

        unit.handleRequest(request);
        preUnitData.coordinates = newCoordinates;

        expect(preUnitData).to.eql(unitData);
    })
} );

function givenInitialUnit() {
    unitData = new UnitStruct();
    unitData.attackPoints = 5;
    unitData.healthPoints = 10;
    unitData.amountPerGather = 15;
    unitData.defensePoints = 12;
    unit = new Unit(0, new MockGamePlayHandler, unitData);
    preUnitData = _.cloneDeep(unitData);
}