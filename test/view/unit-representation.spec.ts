



import { expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import UnitRepresentation from "../../src/view/unit-representation";
import MockSceneObject from "../mocks/mock-scene-object";
import MockRequestHandler from "../mocks/mock-request-handler";
import MoveRequest from "../../src/view/requests/move-request";
import MockWadeRepresentation from "../mocks/mock-wade-representation";

describe("UnitRepresentation class unit test", () => {
    it("correctly instantiates", () => {
        let so = new MockSceneObject();
        let handler = new MockRequestHandler();
        let rep = new UnitRepresentation(so, handler);
    });
    it("correctly goes to new location", () => {
        let so = new MockSceneObject();
        let handler = new MockRequestHandler();
        let rep = new UnitRepresentation(so, handler);

        let clock = sinon.useFakeTimers();

        rep.travelTo([20, 20]);
        clock.tick(400);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(-1);
            expect(handler.req.location[1]).to.eql(-1);
        } else {
            expect(true).to.be.false;
        }
        so.nextLocation();
        
        clock.tick(300);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(0);
            expect(handler.req.location[1]).to.eql(0);
        } else {
            expect(true).to.be.false;
        }
        so.nextLocation();

        clock.tick(300);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(0);
            expect(handler.req.location[1]).to.eql(1);
        } else {
            expect(true).to.be.false;
        }
    });

    it("updates location while chasing another representation", () => {
        let so = new MockSceneObject();
        let handler = new MockRequestHandler();
        let rep = new UnitRepresentation(so, handler);

        let target = new MockWadeRepresentation(new MockSceneObject());

        // According to the source of UnitRepresentation,
        // location is updated every 300 ms.
        // Clock tick times are designed to work with this.
        let clock = sinon.useFakeTimers();

        rep.chase(target);
        clock.tick(900);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(-1);
            expect(handler.req.location[1]).to.eql(-1);
        } else {
            expect(true).to.be.false;
        }
        so.nextLocation();
        
        clock.tick(300);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(0);
            expect(handler.req.location[1]).to.eql(0);
        } else {
            expect(true).to.be.false;
        }
        so.nextLocation();

        clock.tick(300);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(0);
            expect(handler.req.location[1]).to.eql(1);
        } else {
            expect(true).to.be.false;
        }

        clock.restore();
    });

    it("chases target even when target only moves periodically", () => {
        let so = new MockSceneObject();
        let handler = new MockRequestHandler();
        let rep = new UnitRepresentation(so, handler);

        let target = new MockWadeRepresentation(new MockSceneObject());

        let clock = sinon.useFakeTimers();

        // According to the source of UnitRepresentation,
        // during a chase, location is updated every 300 ms or so.
        // Clock tick times are designed to work with this.
        rep.chase(target);
        clock.tick(900);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(-1);
            expect(handler.req.location[1]).to.eql(-1);
        } else {
            expect(true).to.be.false;
        }        
        clock.tick(500);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(-1);
            expect(handler.req.location[1]).to.eql(-1);
        } else {
            expect(true).to.be.false;
        }

        clock.tick(500);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(-1);
            expect(handler.req.location[1]).to.eql(-1);
        } else {
            expect(true).to.be.false;
        }
        so.nextLocation();

        clock.tick(500);
        if(handler.req instanceof MoveRequest) {
            expect(handler.req.location[0]).to.eql(0);
            expect(handler.req.location[1]).to.eql(0);
        } else {
            expect(true).to.be.false;
        }

        clock.restore();
    });
})