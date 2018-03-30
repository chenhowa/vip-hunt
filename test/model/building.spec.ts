import { expect } from "chai";
import "mocha";
import "sinon";

import { Building } from "../../src/model/building";
import { Coordinates2D } from "../../src/custom_types/coordinates-2d";


describe("Random Tester for Building Functiosn", () => {
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
        let amountPerGather = Math.random() * maxAmount;
        let interactionRange = Math.random() * maxRange;
        let coordinates: Coordinates2D =
            [Math.random() * maxCoordinate, Math.random() * maxCoordinate];
        let randomBuilding = new Building
            (id, ownerId, attackPoints, defensePoints, healthPoints,
                visionRadius,
                interactionRange,
                coordinates);
        testBuildingGetFunctions(randomBuilding, id, ownerId, attackPoints,
                        defensePoints,
                        healthPoints, visionRadius,
                        interactionRange, coordinates);
        testBuildingSideEffectFunctions(randomBuilding);
        testBuildingCalculateFunctions(randomBuilding);

    }

});

function testBuildingGetFunctions(building: Building, id: number, ownerId: number,
            attackPoints: number, defensePoints: number,
            healthPoints: number, visionRadius: number, 
            interactionRange: number, coordinates: Coordinates2D) {

    it( "getCoordinates2D", () => {
        expect(building.getCoordinates2D()).to.eql(coordinates);
    });
    it("getOwnerId()", () => {
        expect(building.getOwnerId()).to.eql(ownerId);
    });
    it("getVisionRadius()", () => {
        expect(building.getVisionRadius()).to.eql(visionRadius);
    });
    it("getInteractionRange()", () => {
        expect(building.getInteractionRange()).to.eql(interactionRange);
    });
    it("getAttackPoints()", () => {
        expect(building.getAttackPoints()).to.eql(attackPoints);
    });
    it("getHealthPoints()", () => {
        expect(building.getHealthPoints()).to.eql(healthPoints);
    });
    it("getId()", () => {
        expect(building.getId()).to.eql(id);
    });
}

function testBuildingSideEffectFunctions( building: Building) {


}

function testBuildingCalculateFunctions(building: Building) {

}