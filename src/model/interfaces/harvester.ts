import Harvestable from "./harvestable";




export default interface Harvester {
    harvest(target: Harvestable);
}