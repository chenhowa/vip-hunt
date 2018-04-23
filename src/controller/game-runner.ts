import RequestHandler from "../model/interfaces/request-handler";
import { Request, RequestKind } from "../model/interfaces/request";
import Hud from "../view/interfaces/hud";
import ShowBarracksPanelRequest from "./requests/show-barracks-panel-request";
import GameMemento from "../model/interfaces/game-memento";
import Game from "../model/game";




export default class GameRunner implements RequestHandler {
    private hud: Hud;
    private game: Game;

    private constructor() {

    }


    static toNewGame(numPlayers: number, activePlayerId: number) {
        let runner = new GameRunner();
        runner.game = Game.withPlayers(numPlayers, activePlayerId);
        return runner;
    }

    static fromMemento(memento: GameMemento) {
        let runner = new GameRunner();
        runner.game = Game.fromMemento(memento);
        return runner;
    }

    initializeHud() {
        this.hud.showMainPanel();
        this.hud.showPlayerResources();
    }

    setHud(hud: Hud) {
        this.hud = hud;
    }

    isGameInitialized() {
        if(this.game) {
            return true;
        }
        return false;
    }

    handle(req: Request) {
        if(req.getKind() === RequestKind.ShowBarracksPanel && req instanceof ShowBarracksPanelRequest) {
            this.hud.showBarracksPanel();
        } else {
            // If the GameRunner cannot handle a request, our code has a problem
            throw Error("GameRunner cannot handle this request");
        }
    }
}