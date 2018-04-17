import * as _ from "lodash";

import Resource from "../../src/model/interfaces/resource";
import Damageable from "../../src/model/interfaces/damageable";
import Coordinates2D from "../../src/model/types/coodinates-2d";

export default class MockResource implements Resource {

    private location: Coordinates2D

    constructor(private id: number) {

    }

    render() {

    }

    dealDamage(target: Damageable) {

    }

    harvest(amount: number) {

    }

    move(location: Coordinates2D) {

    }

    isAt(locatioon: Coordinates2D) {
        return _.isEqual(this.location, location);
    }

    hasId(id: number) {
        return this.id === id;
    }
}