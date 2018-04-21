



import { expect } from "chai";
import "mocha";
import * as sinon from "sinon";
import MockSceneObject from "../mocks/mock-scene-object";
import MockRequestHandler from "../mocks/mock-request-handler";

import BuildingRepresentation from "../../src/view/building-representation";

describe("BuildingRepresentation class unit tests", () => {
    it("instantiates", () => {
        let so = new MockSceneObject();
        let handler = new MockRequestHandler();
        let rep = new BuildingRepresentation(so, handler);
    })

});