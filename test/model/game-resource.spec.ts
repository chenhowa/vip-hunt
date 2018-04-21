



import { expect } from "chai";
import "mocha";
import "sinon";

import GameResource from "../../src/model/game-resource";
import MockDamageable from "../mocks/mock-damageable";

describe("GameResource class unit test", () => {
    it("instantiates", () => {
        let resource = new GameResource(0);
        expect(resource.hasId(0)).to.be.true;
    });

    it("deals damage to Damageable", () => {
        let resource = new GameResource(0);
        let damageable = new MockDamageable();
        damageable.health = 15;
        resource.dealDamage(damageable);
        expect(damageable.health).to.eql(14);
    })
})