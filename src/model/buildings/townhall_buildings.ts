import Building from "./buildings";
import * as _ from 'lodash';
import { Container, injectable, inject } from "inversify";

@injectable()
class TownHall extends Building {
    constructor(id: number, hp: number, vision: number) {
        super(id, hp, vision);
        this.name = "TownHall";
    }
    static fromObject(obj) : TownHall {
        let building = TownHall.defaultTownHall();
        if(_.has(obj, 'hp')) {
            building.hp = obj.hp;
        }
        if(_.has(obj, 'vision')) {
            building.vision = obj.vision ;
        }

        return building;


    }
    static defaultTownHall() : TownHall {
        const id = 0;
        const hp = 500; 
        const vision = 300;

        return new TownHall(id, hp, vision);
    }
}

export default TownHall;
