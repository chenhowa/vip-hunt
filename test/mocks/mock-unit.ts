
import Unit from "../../src/model/interfaces/unit";
import Damageable from "../../src/model/interfaces/damageable";
import Harvestable from "../../src/model/interfaces/harvestable";
import Coordinates2D from "../../src/model/types/coodinates-2d";

import * as _ from "lodash";

export default class MockUnit implements Unit {
    public id: number;
    public location: Coordinates2D = [0, 0];
    constructor(id: number) {
        this.id = id;
    }

    render() {

    }

    dealDamage(target: Damageable) {

    }

    takeDamage(damage: number) {

    }

    harvest(target: Harvestable) {

    }

    hasId(id: number ) {
        return this.id === id;
    }

    move(location: Coordinates2D) {

    }

    isAt(location: Coordinates2D) {
        return _.isEqual(this.location, location);
    }
}