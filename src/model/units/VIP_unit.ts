import * as _ from 'lodash';
import Unit from "./units";
import { Container, injectable, inject } from "inversify";

@injectable()
class VIP extends Unit {
    constructor(
            id: number, hp: number, attack: number, defense: number,
                speed: number, range: number, vision: number, gathering: number) {
        super(id, hp, attack, defense, speed, range, vision, gathering);
        this.name = "VIP";

    }


    static fromObject(obj): VIP {
        let unit = VIP.defaultVIP();
        if(_.has(obj, 'hp')) {
            unit.hp = obj.hp;
        }
        if(_.has(obj, 'attack')) {
            unit.attack = obj.attack;
        }
        if(_.has(obj, 'defense')) {
            unit.defense = obj.defense;
        }
        if(_.has(obj, 'speed')) {
            unit.speed = obj.speed;
        }
        if(_.has(obj, 'range')) {
            unit.range = obj.range;
        }
        if(_.has(obj, 'vision')) {
            unit.vision = obj.vision;
        }
        if(_.has(obj, 'gathering')) {
            unit.gathering = obj.gathering; 
        }
        return unit;
    }

    static defaultVIP() : VIP {
        const id = 0;
        const hp = 50;
        const attack = 20;
        const defense = 50;
        const speed = 70;
        const range = 20;
        const vision = 30;
        const gathering = 70;

        return new VIP(id, hp, attack, defense, speed, range, vision, gathering);
    }

}

export default VIP;
