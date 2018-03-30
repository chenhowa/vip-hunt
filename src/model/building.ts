import { GameBuilding } from "../custom_types/game-building";
import { Coordinates2D } from "../custom_types/coordinates-2d";

class Building
    implements
        GameBuilding
{
    constructor(
        private id: number, private ownerId: number,
        private attackPoints: number, private defensePoints, 
        private healthPoints: number,
        private visionRadius: number,
        private interactionRange: number,
        private coordinates: Coordinates2D, 

    ) {
    
    
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