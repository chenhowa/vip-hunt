import { expect } from "chai";
import "mocha";
import "sinon";

import { ObjectToUnitDecoder } from "../../src/decoders/object-to-unit-decoder";
import * as _ from "lodash";

let allPropertiesPresentPartition = [
    {
        id: 1,
        ownerId: 2,
        attackPoints: 50,
        defensePoints: 20,
        healthPoints: 1500,
        visionRadius: 9,
        speedPoints: 170,
        amountPerGather: 20,
        interactionRange: 7,
        coordinates: [20, 30],
    }
]

let somePropertiesMissingPartition = [
    _.cloneDeep(allPropertiesPresentPartition[0])
];
delete somePropertiesMissingPartition[0].id;

describe("Partition Tests for ObjectToUnitDecoder", () => {
    for(let i = 0; i < allPropertiesPresentPartition.length; i++) {
        testDecodingIsCorrect(allPropertiesPresentPartition[i]);
    }

    for(let i = 0; i < somePropertiesMissingPartition.length; i++) {
        testDecodingThrows(somePropertiesMissingPartition[i]);
    }

});

function testDecodingThrows(object: any) {
    it("should throw", () => {
        expect(function () {
            new ObjectToUnitDecoder(object);
        }).to.throw();
    })
}

function testDecodingIsCorrect(object: any) {
    it("should not throw", () => {
        expect(function() {
            new ObjectToUnitDecoder(object)
        }).to.not.throw();
    })

    let decoder = new ObjectToUnitDecoder(object);

    it("returns correct id", () => {
        expect(decoder.getId()).to.eql(object.id);
    });

    it("returns correct ownerId", () => {
        expect(decoder.getOwnerId()).to.eql(object.ownerId);
    })

    it("returns correct attackPoints", () => {
        expect(decoder.getAttackPoints()).to.eql(object.attackPoints);
    })

    it("returns correct defensePoints", () => {
        expect(decoder.getDefensePoints()).to.eql(object.defensePoints);
    });

    it("returns correct healthPoints", () => {
        expect(decoder.getHealthPoints()).to.eql(object.healthPoints);
    });

    it("returns correct visionRadius", () => {
        expect(decoder.getVisionRadius()).to.eql(object.visionRadius);
    });

    it("returns correct speedPoints", () => {
        expect(decoder.getSpeedPoints()).to.eql(object.speedPoints);
    });

    it("returns correct amountPerGather", () => {
        expect(decoder.getAmountPerGather()).to.eql(object.amountPerGather);
    });

    it("returns correct interactionRange", () => {
        expect(decoder.getInteractionRange()).to.eql(object.interactionRange);
    });

    it("returns correct coordinates", () => {
        expect(decoder.getCoordinates2D()).to.eql(object.coordinates);
    })
}