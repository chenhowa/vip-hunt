import { GameState } from "../model/game-state";


interface GameStateFactory {
    newGame(): GameState;
    fromObject(object: any): GameState;
}

export { GameStateFactory };