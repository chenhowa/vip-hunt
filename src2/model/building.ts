import { GameBuilding } from "../custom_types/game-building";
import { Coordinates2D } from "../custom_types/coordinates-2d";
import { ObjectToBuildingDecoder } from "../decoders/object-to-building-decoder";
import { BuildingType } from "../enums/building-type";

class Building
    implements
        GameBuilding
{
    constructor(
        private id: number, private ownerId: number,
        private attackPoints: number, private defensePoints: number, 
        private healthPoints: number,
        private visionRadius: number,
        private interactionRange: number,
        private coordinates: Coordinates2D, private type: BuildingType,

    ) {
    
    
    }

    static fromObject(object: any) {
        /*
            TO create a Buildiing from and Object, decode the object and 
            use the decoder to create a Building.
        */
        let decoder = new ObjectToBuildingDecoder(object);
        return new Building (
            decoder.getId(),
            decoder.getOwnerId(),
            decoder.getAttackPoints(),
            decoder.getDefensePoints(),
            decoder.getHealthPoints(),
            decoder.getVisionRadius(),
            decoder.getInteractionRange(),
            decoder.getCoordinates2D(),
            decoder.getBuildingType(),
        );
    }

    getBuildingType() {
        return this.type;
    }

    getId() {
        return this.id; 
    }

    getOwnerId() {
        return this.ownerId; 
    }

    getInteractionRange() {
        return this.interactionRange; 
    }

    getVisionRadius() {
        return this.visionRadius; 
    
    }

    getCoordinates2D() {
        return this.coordinates; 
    }

    getAttackPoints() {
        return this.attackPoints; 
    }

    getHealthPoints() {
        return this.healthPoints; 
    }

    takeDamage(attackPoints: number): void {
    
    
    }





}

export { Building };