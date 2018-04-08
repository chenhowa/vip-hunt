
import GamePlayRequest from "./gameplay-request";

export default interface GamePlayHandler {
    handleRequest(request: GamePlayRequest);
}