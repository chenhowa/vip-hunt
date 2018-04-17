import * as _ from "lodash";

import Building from "../../src/model/interfaces/building";
import Harvestable from "../../src/model/interfaces/harvestable";
import Coordinates2D from "../../src/model/types/coodinates-2d";

export default class MockBuilding implements Building {
    public id: number;
    public location: Coordinates2D = [0, 0];
    constructor(id: number) {
        this.id = id;
    }

    render() {

    }

    dealDamage() {

    }

    takeDamage() {

    }

    harvest(target: Harvestable) {

    }

    move(location: Coordinates2D) {

    }

    isAt(location: Coordinates2D) {
        return _.isEqual(location, this.location);
    }

    hasId(id: number) {
        return this.id === id;
    }
}