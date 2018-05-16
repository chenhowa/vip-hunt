import RequestHandler from "../model/interfaces/request-handler";
import { Request, RequestKind } from "../model/interfaces/request";
import Hud from "../view/interfaces/hud";
import ShowBarracksPanelRequest from "./requests/show-barracks-panel-request";
import GameMemento from "../model/interfaces/game-memento";
import Game from "../model/game";
import DefaultHud from "../view/default-hud";
import Camera from "./interfaces/camera";
import DefaultCamera from "./default-camera";


import * as Rx from "rxjs";
import DefaultUiEventStreamer from "./default-ui-event-streamer";
import UiEventStreamer from "./interfaces/ui-event-streamer";
import GameInfo from "../model/game-info";



export default class GameRunner implements RequestHandler {
    private hud: Hud;
    private camera: Camera;
    private game: Game;

    private userEventHandler: UiEventStreamer;

    private constructor() {
        this.userEventHandler = new DefaultUiEventStreamer()
        this.camera = new DefaultCamera(this.userEventHandler);

    }

    play() {
        this.initializeGame();
        this.initializeCamera();
        this.initializeHud();
    }

    private initializeGame() {
        // TODO : Get numplayers and settings from the server!
        this.game = Game.withPlayers(1 , 2 );
    }

    private initializeCamera() {
        this.camera.setScreenSize();
        this.camera.allowMouseControl();
        this.camera.allowKeyboardControl();
    }

    private initializeHud() {
        this.hud = new DefaultHud(new GameInfo(this.game));
        this.hud.display();
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
            this.hud.handle(req);
        } else {
            // If the GameRunner cannot handle a request, our code has a problem
            throw Error("GameRunner cannot handle this request");
        }
    }
}