import * as _ from 'lodash';
import { Coordinates2D } from '../custom_types/coordinates-2d';

class ObjectToUnitDecoder {
    constructor(private object: any) {
        if(! _.has(object, 'id') ) {
            throw Error("ObjectToUnitDecoder: cannot decode id");
        }
        if(! _.has(object, 'ownerId')) {
            throw Error("ObjectToUnitDecoder: cannot decode ownerId");
        }
        if(! _.has(object, 'attackPoints')) {
            throw Error("ObjectToUnitDecoder: cannot decode attackPoints");
        }
        if(! _.has(object, 'defensePoints')) {
            throw Error("ObjectToUnitDecoder: cannot decode defensePoints");
        }
        if(! _.has(object, 'healthPoints')) {
            throw Error("ObjectToUnitDecoder: cannot decode healthPoints");
        }
        if(! _.has(object, 'visionRadius')) {
            throw Error("ObjectToUnitDecoder: cannot decode visionRadius");
        }
        if(! _.has(object, 'speedPoints')) {
            throw Error("ObjectToUnitDecoder: cannot decode speedPoints");
        }
        if(! _.has(object, 'amountPerGather')) {
            throw Error("ObjectToUnitDecoder: cannot decode amountPerGather");
        }
        if(! _.has(object, 'interactionRange')) {
            throw Error("ObjectToUnitDecoder: cannot decode interactionRange");
        }
        if(! _.has(object, 'coordinates')) {
            throw Error("ObjectToUnitDecoder: cannot decode coordinates");
        }
    }

    getId(): number {
        return this.object.id;
    }

    getOwnerId(): number {
        return this.object.ownerId;
    }

    getAttackPoints(): number {
        return this.object.attackPoints;
    }

    getDefensePoints(): number {
        return this.object.defensePoints;
    }

    getHealthPoints(): number {
        return this.object.healthPoints;
    }

    getVisionRadius(): number {
        return this.object.visionRadius;
    }

    getSpeedPoints(): number {
        return this.object.speedPoints;
    }

    getAmountPerGather(): number {
        return this.object.amountPerGather;
    }

    getInteractionRange(): number {
        return this.object.interactionRange;
    }

    getCoordinates2D(): Coordinates2D {
        return this.object.coordinates;
    }
}

export { ObjectToUnitDecoder };