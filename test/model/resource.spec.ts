import { expect } from "chai";
import "mocha";
import "sinon";
import * as _ from "lodash";
import ResourceStruct from "../../src/model/resource-struct";
import Resource from "../../src/model/resource";

describe("Resource class correctly", () => {
    let data = new ResourceStruct();
    data.amount = 500;
    let resource = new Resource(data);

    it("gets harvested", () => {
        let preData = _.cloneDeep(data);

        let amountToHarvest = 10;
        resource.getHarvestedBy(amountToHarvest);
        preData.amount -= amountToHarvest;
        expect(preData).to.eql(data);

        amountToHarvest = -15;
        resource.getHarvestedBy(amountToHarvest);
        preData.amount -= amountToHarvest;
        expect(preData).to.eql(data);

    });
});