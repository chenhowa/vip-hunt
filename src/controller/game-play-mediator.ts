import GamePlayHandler from "../interfaces/gameplay-handler";
import AbstractUnit from "../custom_types/abstract-unit";
import AbstractBuilding from "../custom_types/abstract-building";
import AbstractResource from "../custom_types/abstract-resource";






export default class GamePlayMediator {


    constructor(
            private sender: GamePlayHandler & (AbstractUnit | AbstractBuilding),
            private receiver: GamePlayHandler & (AbstractUnit | AbstractBuilding | AbstractResource)) {

    }

    attack() {

    }

    gather() {

    }

    follow() {
        
    }
}