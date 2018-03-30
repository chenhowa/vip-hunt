import { BuildingFactory } from "../factories/building-factory";
import { Building } from "../model/building";
import * as _ from "lodash";

class ConfigBuildingFactory implements BuildingFactory {
    constructor(
                private barracksProperties: any, private stablesProperties: any,
                private towerProperties: any, private townHallProperties: any) {
        
    }

    makeBarracks() {
        let newBarracks = Building.fromObject(this.barracksProperties);
        return newBarracks;
    }

    makeStables() {
        let newStables = Building.fromObject(this.stablesProperties);
        return newStables;
    }

    makeTower() {
        let newTower = Building.fromObject(this.towerProperties);
        return newTower;
    }

    makeTownHall() {
        let newTownHall = Building.fromObject(this.townHallProperties);
        return newTownHall;
    }

}

function hasAllBuildingConfigProperties(
                buildingProperties: any, configProperties: string[]) {
    _.forEach(configProperties, (property) => {
        if(! _.has(buildingProperties, property)) {
            return false;
        }
    });

    return true;
}

export { ConfigBuildingFactory };