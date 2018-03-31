import { expect } from "chai";
import "mocha";
import "sinon";

import { Resource } from "../../src/model/resource";

describe("Random Tester for Resource functions", () => {
    let maxAmount = 100;
    let maxId = maxAmount;

    let numTests = 10;
    for(let i = 0; i < numTests; i++) {
        let expected = {
            id: Math.random() * maxId,
            amount: Math.random() * maxAmount,
        }

        let randomResource = Resource.fromObject(expected);
        testResourceGetFunctionsAgainstExpected(randomResource, expected);
        testResourceSideEffectFunctions(randomResource);
        testResourceCalculateFunctions(randomResource);

    }
});

function testResourceGetFunctionsAgainstExpected(resource: Resource,
                            expected: any) {
    it("getAmount()" , () => {
        expect(resource.getAmount()).to.eql(expected.amount);
    });

    it("getId()", () => {
        expect(resource.getId()).to.eql(expected.id);
    });
}

function testResourceSideEffectFunctions(resource: Resource) {
    it("reduceAmountBy()", () => {
        let amountGathered = 5;
        let expected = resource.getAmount() - amountGathered;
        resource.reduceAmountBy(amountGathered);
        expect(resource.getAmount()).to.eql(expected);
    })
}

function testResourceCalculateFunctions(resource: Resource) {

}