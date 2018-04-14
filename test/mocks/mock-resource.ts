import AbstractResource from "../../src/custom_types/abstract-resource";
import Identifiable from "../../src/interfaces/identifiable";
import Drawable from "../../src/interfaces/drawable";
import Harvester from "../../src/interfaces/harvester";



export default class MockResource implements AbstractResource, Identifiable, Drawable {
    public amount: number = 50;
    public id: number = 20;

    constructor() {

    }

    render() {

    }

    getHarvestedBy(amountToHarvest: number) {
        this.amount -= amountToHarvest;
    }

    getId() {
        return this.id;
    }
}