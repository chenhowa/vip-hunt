import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";


import DieRequest from "../../../src/model/requests/die-request";
import TargetType from "../../../src/enums/target-type";




let request: DieRequest;


describe("DieRequest class correctly", () => {
    it("constructs a unit die request", () => {
        givenUnitDieRequest();
        expectCorrectUnitProperties();
    });

    function givenUnitDieRequest() {
        request = DieRequest.forUnit();
    }
    function expectCorrectUnitProperties() {
        expect(request.id).to.eql(-1);
        expect(request.gameObjectKind).to.eql(TargetType.Unit);
    }

    it("constructs a building die request", () => {
        givenBuildingDieRequest();
        expectCorrectBuildingProperties();
    });

    function givenBuildingDieRequest() {
        request = DieRequest.forBuilding();
    }

    function expectCorrectBuildingProperties() {
        expect(request.id).to.eql(-1);
        expect(request.gameObjectKind).to.eql(TargetType.Building);
    }
});