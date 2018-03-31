

import { PlayerState } from "./player-state";
import { GameResource } from "../custom_types/game-resource";

class GameState {
    private resources: Map<number, GameResource>;
    private players: Map<number, PlayerState>;


    constructor() {
        this.resources = new Map();
        this.players = new Map();
    }
    
    insertResource(resource: GameResource) {
        this.resources.set(resource.getId(), resource);
    }

    insertPlayer(player: PlayerState) {
        this.players.set(player.getId(), player);
    }

    getPlayer(id: number) {
        return this.players.get(id);
    }

    getPlayers() {
        return this.players.values();
    }

    getResource(id: number) {
        return this.resources.get(id);
    }

    getAllResources() {
        return this.resources.values();
    }
}

export { GameState };