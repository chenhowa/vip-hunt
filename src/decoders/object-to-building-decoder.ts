import * as _ from 'lodash';
import { Coordinates2D } from '../custom_types/coordinates-2d';

class ObjectToBuildingDecoder {
    constructor(private object: any) {
        if(! _.has(object, 'id') ) {
            throw Error("ObjectToBuildingDecoder: cannot decode id");
        }
        if(! _.has(object, 'ownerId')) {
            throw Error("ObjectToBuildingDecoder: cannot decode ownerId");
        }
        if(! _.has(object, 'attackPoints')) {
            throw Error("ObjectToBuildingDecoder: cannot decode attackPoints");
        }
        if(! _.has(object, 'defensePoints')) {
            throw Error("ObjectToBuildingDecoder: cannot decode defensePoints");
        }
        if(! _.has(object, 'healthPoints')) {
            throw Error("ObjectToBuildingDecoder: cannot decode healthPoints");
        }
        if(! _.has(object, 'visionRadius')) {
            throw Error("ObjectToBuildingDecoder: cannot decode visionRadius");
        }
        if(! _.has(object, 'interactionRange')) {
            throw Error("ObjectToBuildingDecoder: cannot decode interactionRange");
        }
        if(! _.has(object, 'coordinates')) {
            throw Error("ObjectToBuildingDecoder: cannot decode coordinates");
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

    getInteractionRange(): number {
        return this.object.interactionRange;
    }

    getCoordinates2D(): Coordinates2D {
        return this.object.coordinates;
    }
}

export { ObjectToBuildingDecoder };