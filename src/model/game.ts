import AbstractResource from "../custom_types/abstract-resource";
import GamePlayHandler from "../interfaces/gameplay-handler";
import GamePlayRequest from "../interfaces/gameplay-request";
import GamePlayRequestType from "../enums/gameplay-request-type";
import AttackRequest from "./requests/attack-request";
import Damageable from "../interfaces/damageable";
import AbstractPlayer from "../interfaces/abstract-player";
import Identifiable from "../interfaces/identifiable";
import Drawable from "../interfaces/drawable";

import * as _ from "lodash";

export default class Game implements GamePlayHandler, Drawable {
    private resources: Map<number, AbstractResource & Identifiable & Drawable> = new Map();
    private players: Map<number, AbstractPlayer & Drawable & Identifiable> = new Map();
    private activePlayer: number;


    constructor(private runner: any) {
        this.activePlayer = -1;
    }

    render() {
        this.renderResources();
        this.renderPlayers();
    }

    private renderResources() {
        let iterator = this.resources.values();
        this.forEachValue(iterator, (resource) => {
            resource.render();
        });
    }

    private forEachValue<T>(iterator: Iterator<T>, fn: (p: T) => void ) {
        while(true) {
            let result = iterator.next();
            if(result.done) {
                break;
            }
            fn(result.value);
        }
    }

    private renderPlayers() {
        let iterator = this.players.values();
        this.forEachValue(iterator, (player) => {
            player.render();
        })
    }

    addResource(resource: AbstractResource & Identifiable & Drawable) {
        this.resources.set(resource.getId(), resource);
    }

    getResourceCopy(id: number) {
        return _.cloneDeep(this.getResource(id) );
    }

    hasResource(id: number) {
        return this.resources.has(id);
    }

    private getResource(id: number) {
        let resource = this.resources.get(id);
        if(resource === undefined) {
            throw Error("getResource: No resource with id " + id + " found!");
        }
        return resource;
    }

    addPlayer(player: AbstractPlayer & Identifiable & Drawable) {
        this.players.set(player.getId(), player);
    }

    getPlayerCopy(id: number) {
        return _.cloneDeep(this.getPlayer(id));
    }

    hasPlayer(id: number) {
        return this.players.has(id);
    }

    private getPlayer(id: number) {
        let player = this.players.get(id);
        if(typeof player === "undefined") {
            throw Error("getPlayer: No player with id " + id + " found");
            
        } else {
            return player;
        }
    }

    getNumPlayers() {
        return this.players.size;
    }

    setActivePlayer(id: number) {
        this.activePlayer = id;
    }

    handleRequest(request: GamePlayRequest) {
        let kind = request.getKind();

        if(kind === GamePlayRequestType.Attack) {

        }
        else if (kind === GamePlayRequestType.Gather) {
            
        }
        else if (kind === GamePlayRequestType.Win) {

        } else if (kind === GamePlayRequestType.Lose) {
            
        } else {

        }
    }

    private getActivePlayer() {
        return this.getPlayer(this.activePlayer);
    }

    private onlyLogError(e) {
        console.error(e);
    }
}