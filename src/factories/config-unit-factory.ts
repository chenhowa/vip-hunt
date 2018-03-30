import { UnitFactory } from "../factories/unit-factory";
import { Unit } from "../model/unit";
import { ObjectToUnitDecoder } from "../decoders/object-to-unit-decoder";
import * as _ from "lodash";

class ConfigUnitFactory implements UnitFactory {
    constructor(
        private swordsmanProperties: any, private archerProperties: any,
        private vipProperties: any, private gathererProperties: any,
        private spearCalvaryProperties: any, private archerCalvaryProperties: any,
        private drummerBoyProperties: any
    ) {
        
    }

    /*************************************************************
        START OF FACTORY METHODS

        TO make any Unit type, first make a new Unit using
        the correct properties object. Then return the Unit.
    **************************************************************/

    makeSwordsman() {
        let newSwordsman = Unit.fromObject(this.swordsmanProperties);
        return newSwordsman;
    }

    makeArcher() {
        let newArcher = Unit.fromObject(this.archerProperties);
        return newArcher;
    }
    makeVIP() {
        let newVIP = Unit.fromObject(this.vipProperties);
        return newVIP;
    }
    makeGatherer() {
        let newGatherer = Unit.fromObject(this.gathererProperties);
        return newGatherer;
    }
    makeSpearCalvary() {
        let newSpearCalvary = Unit.fromObject(this.spearCalvaryProperties);
        return newSpearCalvary;
    }
    makeArcherCalvary() {
        let newArcherCalvary = Unit.fromObject(this.archerCalvaryProperties);
        return newArcherCalvary;
    }
    makeDrummerBoy() {
        let newDrummerBoy = Unit.fromObject(this.drummerBoyProperties);
        return newDrummerBoy;
    }

    /*************************************************************
        END OF FACTORY METHODS
    **************************************************************/

    

}

function hasAllUnitConfigProperties(
    unitProperties: any, configProperties: string[])
{
    _.forEach(configProperties, (property) => {
        if(! _.has(unitProperties, configProperties)) {
            return false;
        }
    });
    return true;
}