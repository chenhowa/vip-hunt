import AbstractResource from "../custom_types/abstract-resource";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import GamePlayRequestType from "../enums/gameplay-request-type";
import AttackRequest from "./attack-request";
import Damageable from "../interfaces/damageable";
import AbstractPlayer from "../interfaces/abstract-player";
import Identifiable from "../interfaces/identifiable";

export default class Game implements GamePlayHandler {
    private resources: Map<number, AbstractResource> = new Map();
    private players: Map<number, AbstractPlayer> = new Map();
    private activePlayer: number;


    constructor() {
        this.activePlayer = -1;
    }

    addPlayer(player: AbstractPlayer & Identifiable) {
        this.players.set(player.getId(), player);
    }

    setActivePlayer(id: number) {
        this.activePlayer = id;
    }

    handleRequest(request: GamePlayRequest) {
        let kind = request.getKind();

        if(kind === GamePlayRequestType.Attack && request instanceof AttackRequest) {
            this.handleAttackRequest(request);
        } else if (kind === GamePlayRequestType.Win) {
        } else if (kind === GamePlayRequestType.Lose) {
            
        }
    }

    private handleAttackRequest(request: AttackRequest) {
        try {
            let target = this.getTargetDamageable(request);
            let activePlayer = this.getActivePlayer();
            activePlayer.dealDamage(target);
        }
        catch (e ) {
            this.onlyLogError(e);
        }
    }

    private getTargetDamageable(request: AttackRequest) {
        let targetPlayer = this.getPlayer(request.targetPlayerId);
        let target: Damageable;
        if(request.gameObjectKind === "unit") {
            target = targetPlayer.getUnit(request.targetId);
        }
        else if (request.gameObjectKind === "building") {
            target = targetPlayer.getBuilding(request.targetId);
        }
        else {
            throw Error("getTargetGameObject: unknown game object kind!");
        }
        return target;
    }

    getPlayer(id: number) {
        let player = this.players.get(id);
        if(typeof player === "undefined") {
            throw Error("getPlayer: No player with id " + id + " found");
            
        } else {
            return player;
        }
    }

    private getActivePlayer() {
        return this.getPlayer(this.activePlayer);
    }

    private onlyLogError(e) {
        console.error(e);
    }
}