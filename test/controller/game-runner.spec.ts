import { expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import GameRunner from "../../src/controller/game-runner";
import ShowBarracksPanelRequest from "../../src/controller/requests/show-barracks-panel-request";
import MockHud from "../mocks/mock-hud";
import MockRequest from "../mocks/mock-request";
import MockGameMemento from "../mocks/mock-game-memento";


describe("GameRunner class unit tests", () => {
    it("instantiates", () => {
        let runner = GameRunner.toNewGame(10, 1);
    });

    it("can handle requests to display building construction panels", () => {
        let runner = GameRunner.toNewGame(10, 1);
        let hud = new MockHud();
        let spy = sinon.spy(hud, "showBarracksPanel");
        runner.setHud(hud);
        let req = new ShowBarracksPanelRequest();
        runner.handle(req);

        expect(spy.callCount).to.be.eql(1);

        spy.restore();
    });

    it("throws when given unknown requests", () => {
        let runner = GameRunner.toNewGame(10, 1);
        expect(function() {
            runner.handle(new MockRequest() );
        }).to.throw();
    });

    it("correctly constructs a saved game from a memento", () => {
        let runner = GameRunner.fromMemento(new MockGameMemento());
        expect(runner.isGameInitialized() ).to.be.true;
    });

    it("correctly constructs a new game", () => {
        let runner = GameRunner.toNewGame(10, 1);
        expect(runner.isGameInitialized() ).to.be.true;
    });

    it("correctly calls functions to intitialize a HUD", () => {
        let runner = GameRunner.toNewGame(10, 1);
        let hud = new MockHud();
        runner.setHud(hud);
        runner.initializeHud();

        expect(hud.visibleMainPanel).to.be.true;
        expect(hud.visiblePlayerResources).to.be.true;
    });
});




