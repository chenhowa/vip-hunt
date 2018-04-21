import Harvestable from "../../src/model/interfaces/harvestable";



export default class MockHarvestable implements Harvestable {
    public amount = 0;

    harvest(amount: number) {
        this.amount -= amount;
    }
}