import { GameState } from "../model/game-state";
import { GameObject } from "./game-object";


class GameRunner {
    private state: GameState;
    private gameObjects: GameObject[];
    
    constructor () {
        this.state = new GameState();
        this.gameObjects = new Array<GameObject>();
    }

    play() {

    }

}

export { GameRunner };