import ResourceStruct from "./resource-struct";
import PlayerStruct from "./player-struct";

export default class GameStruct {
    public resources: ResourceStruct[] = [];
    public players: PlayerStruct[] = [];
}