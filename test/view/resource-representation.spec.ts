

import { expect } from "chai";
import "mocha";
import * as sinon from "sinon";
import MockSceneObject from "../mocks/mock-scene-object";
import MockRequestHandler from "../mocks/mock-request-handler";

import ResourceRepresentation from "../../src/view/resource-representation";

describe("ResourceRepresentation class unit tests", () => {
    it("instantiates", () => {
        let so = new MockSceneObject();
        let handler = new MockRequestHandler();
        let rep = new ResourceRepresentation(so, handler);
    })
});