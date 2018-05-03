import Game from "./game";





export default class GameInfo {
    constructor(private game: Game) {

    }


    getWood(): number {
        let resources = this.game.getActivePlayerResources();
        let wood = resources.get("wood");
        if(wood) {
            return wood;
        }
        throw Error("Wood not found");
    }

    getStone(): number {
        let resources = this.game.getActivePlayerResources();
        let stone = resources.get("stone");
        if(stone) {
            return stone;
        }
        throw Error("Stone not found");

    }

    getFood(): number {
        let resources = this.game.getActivePlayerResources();
        let food = resources.get("food");
        if(food) {
            return food;
        }
        throw Error("Food not found");
    }
}