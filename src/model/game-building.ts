import Building from "./interfaces/building";
import Damageable from "./interfaces/damageable";
import Harvestable from "./interfaces/harvestable";
import Coordinates2D from "./types/coodinates-2d";
import Representation from "../view/interfaces/representation";



export default class GameBuilding implements Building {
    private damage = 1;
    private health = 0;
    private amountToHarvest = 1;
    private location: Coordinates2D = [0, 0];

    public rep: Representation;

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

    dealDamage(target: Damageable) {
        target.takeDamage(this.damage);
    }

    takeDamage(damage: number) {
        this.health -= damage;
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