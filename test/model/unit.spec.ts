import { expect } from "chai";
import "mocha";
import "sinon";

import { Unit } from "../../src/model/unit";
import { Coordinates2D } from "../../src/custom_types/coordinates-2d";

describe("Random Tester for Unit functions", () => {
    /*
        TO create a random tester for unit GET functions, we declare the 
        max values on the random generate, generate a random Unit,
         and then test the GET functions,
        the CALCULATE functions, and the SIDE-EFFECT functions.
    */

    let maxPoints = 100;
    let maxId = maxPoints;
    let maxRadius = maxPoints;
    let maxAmount = maxPoints;
    let maxRange = maxPoints;
    let maxCoordinate = maxPoints;

    let numTests = 10;
    for(let i = 0; i < numTests; i++) {
        let id = Math.random() * maxId;
        let ownerId = Math.random() * maxId;
        let attackPoints = Math.random() * maxPoints;
        let defensePoints = Math.random() * maxPoints;
        let healthPoints = Math.random() * maxPoints;
        let visionRadius = Math.random() * maxRadius;
        let speedPoints = Math.random() * maxPoints;
        let amountPerGather = Math.random() * maxAmount;
        let interactionRange = Math.random() * maxRange;
        let coordinates: Coordinates2D =
            [Math.random() * maxCoordinate, Math.random() * maxCoordinate];
        let randomUnit = new Unit
            (id, ownerId, attackPoints, defensePoints, healthPoints,
                visionRadius,
                speedPoints, amountPerGather, interactionRange,
                coordinates);
        testUnitGetFunctions(randomUnit, id, ownerId, attackPoints,
                        healthPoints, speedPoints, visionRadius,
                        interactionRange, amountPerGather, coordinates);
        testUnitSideEffectFunctions(randomUnit);
        testUnitCalculateFunctions(randomUnit);

    }
});

function testUnitCalculateFunctions(randomUnit) {



}

function testUnitSideEffectFunctions(unit: Unit) {
    /*
        To testUnitGetFunctions, we receive a Unit and
        the expected test values and test
        all the unit's SideEffect functions.
    */

}

function testUnitGetFunctions(unit: Unit, id: number, ownerId: number,
                attackPoints: number, healthPoints: number,
                speedPoints:number, visionRadius: number,
                interactionRange: number, amountPerGather: number,
                coordinates: Coordinates2D) {
    /*
        TO testUnitGetFunctions, we receive a Unit and the 
        expected test values and 
        test all the unit's GET functions.
    */
    
    it( "getCoordinates2D", () => {
        expect(unit.getCoordinates2D()).to.eql(coordinates);
    });
    it("getOwnerId()", () => {
        expect(unit.getOwnerId()).to.eql(ownerId);
    });
    it("getVisionRadius()", () => {
        expect(unit.getVisionRadius()).to.eql(visionRadius);
    });
    it("getInteractionRange()", () => {
        expect(unit.getInteractionRange()).to.eql(interactionRange);
    });
    it("getAttackPoints()", () => {
        expect(unit.getAttackPoints()).to.eql(attackPoints);
    });
    it("getHealthPoints()", () => {
        expect(unit.getHealthPoints()).to.eql(healthPoints);
    });
    it("getId()", () => {
        expect(unit.getId()).to.eql(id);
    });
    it("getSpeedPoints()", () => {
        expect(unit.getSpeedPoints()).to.eql(speedPoints);
    });
    it("getAmountPerGather()", () => {
        expect(unit.getAmountPerGather()).to.eql(amountPerGather);
    });
}