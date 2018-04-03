import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";

import UnitStruct from "../../src/model/unit-struct";
import Unit from "../../src/model/unit";
import Coordinates2D from "../../src/custom_types/coordinates-2d";
import ResourceStruct from "../../src/model/resource-struct";
import Resource from "../../src/model/resource";
import BuildingStruct from "../../src/model/building-struct";
import Building from "../../src/model/building";



describe( "Unit class correctly", () => {
    let data = new UnitStruct();
    data.attackPoints = 5;
    data.healthPoints = 10;
    data.amountPerGather = 15;
    data.defensePoints = 12;
    let unit = new Unit(data);

    it("takes damage", () => {
        let preData = _.cloneDeep(data);

        let damage = 5;
        unit.takeDamage(damage);
        preData.healthPoints -= damage;
        expect(data).to.eql(preData);

        damage = -10;
        unit.takeDamage(damage);
        preData.healthPoints -= damage;
        expect(data).to.eql(preData);
    });

    it("deals damage", () => {
        let buildingData = new BuildingStruct();
        let building = new Building(buildingData);
        let preBuildingData = _.cloneDeep(buildingData);
        let preData = _.cloneDeep(data);

        let takeDamageSpy = spy(building, 'takeDamage');

        unit.dealDamage(building);
        preBuildingData.healthPoints -= preData.attackPoints;
        expect(buildingData).to.eql(preBuildingData);
        expect(data).to.eql(preData);

        expect(takeDamageSpy.callCount).to.eql(1);

        takeDamageSpy.restore();
    })

    it("moves", () => {
        let preData = _.cloneDeep(data);
        let newCoordinates: Coordinates2D = [10, 5];
        
        unit.move(newCoordinates);
        preData.coordinates = newCoordinates;
        expect(data).to.eql(preData);
    });

    it("harvests", () => {
        let resourceData = new ResourceStruct();
        let resource = new Resource(resourceData);
        let preResourceData = _.cloneDeep(resourceData);
        let preData = _.cloneDeep(data);

        let getHarvestedBySpy = spy(resource, 'getHarvestedBy');

        unit.harvest(resource);
        preResourceData.amount -= preData.amountPerGather;
        expect(resourceData).to.eql(preResourceData);
        expect(preData).to.eql(data);

        expect(getHarvestedBySpy.callCount).to.eql(1);
        getHarvestedBySpy.restore();
    });
} );