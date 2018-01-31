import IIdentifiable from "../../interfaces/identifiable";
import ILocatable from "../../interfaces/locatable";


class Building implements IIdentifiable {
	hp: number;
    id: number;

    constructor(id: number, hp: number) {
        this.hp = hp;
        this.id = id;
    }

    // This function applies the attack points to the instance's hp.
	takeDamage(attackPoints:number):number {
        this.hp -= attackPoints;

        if(this.hp <= 0) {
            this.hp = 0;
            return -1;  // Indicate to the caller that the building is dead
        }

        return 0; // Indicate to the caller that the building is still alive
	}

    getId(): number {
        return this.id;
    }
}


export default Building;
