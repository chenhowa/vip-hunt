import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";


import BuildingStruct from "../../src/model/building-struct";
import Building from "../../src/model/building";
import UnitStruct from "../../src/model/unit-struct";
import Unit from "../../src/model/unit";



describe("Building class correctly", () => {
    let data = new BuildingStruct();
    data.attackPoints = 20;
    data.healthPoints = 5;
    data.defensePoints = 15;
    let building = new Building(data);

    it("takes damage", () => {
        let preData = _.cloneDeep(data);

        let damage = 20;
        building.takeDamage(damage);
        preData.healthPoints -= damage;
        expect(data).to.eql(preData);

        damage = -5;
        building.takeDamage(damage);
        preData.healthPoints -= damage;
        expect(data).to.eql(preData);
    });

    it("deals damage", () => {
        let unitData = new UnitStruct();
        unitData.attackPoints = 2;
        unitData.defensePoints = 5;
        unitData.healthPoints = 3;
        let unit = new Unit(unitData);

        let takeDamageSpy = spy(unit, 'takeDamage');

        let preUnitData = _.cloneDeep(unitData);
        let preData = _.cloneDeep(data);
        building.dealDamage(unit);
        preUnitData.healthPoints -= preData.attackPoints;
        expect(preUnitData).to.eql(unitData);
        expect(preData).to.eql(data);

        expect(takeDamageSpy.callCount).to.eql(1);

        takeDamageSpy.restore();

    })
});