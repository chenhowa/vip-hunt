import { GameResourceFactory } from "../factories/game-resource-factory";
import { Resource } from "../model/resource";

class GameResourceFactoryImp implements GameResourceFactory {
    constructor(private stoneProperties, private woodProperties, private foodProperties) {
        
    }

    makeStone() {
        let newStone = Resource.fromObject(this.stoneProperties);
        return newStone;
    }

    makeWood() {
        let newWood = Resource.fromObject(this.woodProperties);
        return newWood;
    }

    makeFood() {
        let newFood = Resource.fromObject(this.foodProperties);
        return newFood;
    }


}

export { GameResourceFactoryImp };