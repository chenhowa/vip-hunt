
import GameMemento from "../../src/model/interfaces/game-memento";

export default class MockGameMemento implements GameMemento {
    public activePlayerId = 15;
    public numPlayers = 22;
}