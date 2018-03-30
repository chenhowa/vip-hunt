import { GameUnit } from "../custom_types/game-unit";
import { Coordinates2D } from "../custom_types/coordinates-2d";

class Unit
    implements
        GameUnit
{

    constructor(
        private id: number, private ownerId: number,
        private attackPoints: number, private defensePoints: number,
        private healthPoints: number, private visionRadius: number,
        private speedPoints: number, private amountPerGather: number,
        private interactionRange: number, private coordinates: Coordinates2D,
    ) { 
    
    }

    getCoordinates2D() {
        return this.coordinates; 
    }

    getOwnerId() {
        return this.ownerId; 
    }

    getVisionRadius() {
        return this.visionRadius; 
    }

    getInteractionRange() {
        return this.interactionRange; 
    }

    getAttackPoints() {
        return this.attackPoints; 
    }

    getHealthPoints() {
        return this.healthPoints; 
    }

    takeDamage(attackPoints: number): void {
    
    
    }

    getId() {
        return this.id; 
    }

    move(coord: Coordinates2D ): void {
    
    }

    getSpeedPoints() {
        return this.speedPoints;
    }

    getAmountPerGather() {
        return this.amountPerGather; 
    }
}

export { Unit };
