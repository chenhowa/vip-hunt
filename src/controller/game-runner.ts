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



export default class GameRunner implements RequestHandler {
    private hud: Hud = new DefaultHud();
    private camera: Camera;
    private game: Game;

    private userEventHandler: UiEventStreamer;
    private keyDownStream: Rx.Observable<any>;

    private constructor() {
        this.userEventHandler = new DefaultUiEventStreamer()
        this.camera = new DefaultCamera(this.userEventHandler);

    }

    play() {
        this.initializeCamera();
        this.initializeHud();
    }

    initializeCamera() {
        this.camera.setScreenSize();
        this.camera.allowMouseControl();
        this.camera.allowKeyboardControl();
    }

    initializeHud() {
        this.hud.showBackground();
        //this.hud.showMainPanel();
        //this.hud.showPlayerResources();
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
            this.hud.showBarracksPanel();
        } else {
            // If the GameRunner cannot handle a request, our code has a problem
            throw Error("GameRunner cannot handle this request");
        }
    }
}