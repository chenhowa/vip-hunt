import Resource from "./interfaces/resource";
import Damageable from "./interfaces/damageable";
import Coordinates2D from "./types/coodinates-2d";

import * as _ from "lodash";
import Representation from "../view/interfaces/representation";



export default class GameResource implements Resource {
    private damage = 1;
    private amount = 0;
    private location: Coordinates2D = [0, 0];
    public rep: Representation;

    constructor(private id: number) {

    }

    render() {

    }

    hasId(id: number) {
        return this.id === id;
    }

    hasAmountRemaining(amount: number) {
        return this.amount === amount;
    }

    dealDamage(target: Damageable) {
        target.takeDamage(this.damage);
    }

    harvest(amount: number) {
        this.amount -= amount;
    }

    move(location: Coordinates2D) {
        this.location = location;
    }

    isAt(location: Coordinates2D) {
        return _.isEqual(this.location, location);
    }
}