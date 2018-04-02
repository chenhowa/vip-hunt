
import { GameResource } from "../custom_types/game-resource";

interface GameResourceFactory {
    makeStone(): GameResource;
    makeWood(): GameResource;
    makeWood(): GameResource;
}

export { GameResourceFactory };