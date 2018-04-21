import Unit from "./interfaces/unit";
import Coordinates2D from "./types/coodinates-2d";
import * as _ from "lodash";
import Damageable from "./interfaces/damageable";
import Harvestable from "./interfaces/harvestable";

export default class GameUnit implements Unit {
    private health = 0;
    private damage = 1;
    private amountToHarvest = 1;
    private location: Coordinates2D = [0, 0];

    constructor(private id: number) {

    }

    render() {

    }

    hasId(id: number) {
        return this.id === id;
    }

    hasHealth(health: number) {
        return this.health === health;
    }

    takeDamage(damage: number) {
        this.health -= damage;
    }

    dealDamage(target: Damageable) {
        target.takeDamage(this.damage);
    }

    harvest(target: Harvestable) {
        target.harvest(this.amountToHarvest);
    }

    move(location: Coordinates2D) {
        this.location = location;
    }

    isAt(location: Coordinates2D) {
        return _.isEqual(this.location, location);
    }
}