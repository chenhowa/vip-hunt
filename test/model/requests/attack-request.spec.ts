import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";


import AttackRequest from "../../../src/model/requests/attack-request";
import TargetType from "../../../src/enums/target-type";
import GamePlayRequestType from "../../../src/enums/gameplay-request-type";

let request: AttackRequest;


describe("AttackRequest class correctly", () => {
    it("constructs a unit attack request", () => {
        givenUnitAttackRequest();
        unitRequestHasCorrectProperties();
    })

    function givenUnitAttackRequest() {
        request = AttackRequest.fromUnit();
    }
    function unitRequestHasCorrectProperties() {
        expect(request.targetId).to.eql(-1);
        expect(request.targetPlayerId).to.eql(-1);
        expect(request.gameObjectKind).to.eql(TargetType.Unit);
        expect(request.getKind()).to.eql(GamePlayRequestType.Attack);
    }

    it("constructs a building attack request", () => {
        givenBuildingAttackRequest();
        buildingRequestHasCorrectProperties();
    });

    function givenBuildingAttackRequest() {
        request = AttackRequest.fromBuilding();
    }
    function buildingRequestHasCorrectProperties() {
        expect(request.targetId).to.eql(-1);
        expect(request.targetPlayerId).to.eql(-1);
        expect(request.gameObjectKind).to.eql(TargetType.Building);
        expect(request.getKind()).to.eql(GamePlayRequestType.Attack);
    }
});