import { GameState } from "../model/game-state";
import { GameUnitRunner } from "./game-unit-runner";
import { GameBuildingRunner } from "./game-building-runner";
import { GameResourceRunner } from "./game-resource-runner";
import { GameResourceFactory } from "../factories/game-resource-factory";
import { GameBuildingFactory } from "../factories/game-building-factory";
import { GameUnitFactory } from "../factories/game-unit-factory";
import { Drawable } from "../interfaces/drawable";
import { GameStateFactory } from "../factories/game-state-factory";
import { GameUnit } from "../custom_types/game-unit";
import { GameBuilding } from "../custom_types/game-building";
import { GameResource } from "../custom_types/game-resource";
import { RepresentationFactory } from "../factories/representation-factory";
import * as _ from "lodash";
import { WadeRepresentationFactory } from "../factories/wade-representation-factory";
import { GameUnitFactoryImp } from "../factories/game-unit-factory-imp";
import { utilities } from "../utilities";

class GameRunner {
  private state: GameState;
  private gameUnitRunners: Map<number, GameUnitRunner>;
  private gameBuildingRunners: Map<number, GameBuildingRunner>;
  private gameResourceRunners: Map<number, GameResourceRunner>;

  constructor(
    private representationFactory: RepresentationFactory,
    private gameUnitFactory: GameUnitFactory,
    private gameBuildingFactory: GameBuildingFactory,
    private gameResourceFactory: GameResourceFactory,
    private gameStateFactory: GameStateFactory
  ) {
    /*
            TO construct a GameRunner, we set up the initial state of the game and generate the initial
            that are responsible for rendering the state.
        */
    this.initializeNewRunners();
    this.initializeNewGame();
  }

  private initializeNewGame() {
    this.state = this.gameStateFactory.newGame();
  }

  private initializeNewRunners() {
    this.gameUnitRunners = new Map();
    this.gameBuildingRunners = new Map();
    this.gameResourceRunners = new Map();
  }

  setRepresentationFactory(factory: RepresentationFactory) {
    this.representationFactory = factory;
  }

  setGameUnitFactory(factory: GameUnitFactory) {
    this.gameUnitFactory = factory;
  }

  setGameBuildingFactory(factory: GameBuildingFactory) {
    this.gameBuildingFactory = factory;
  }

  setGameResourceFactory(factory: GameResourceFactory) {
    this.gameResourceFactory = factory;
  }

  setGameStateFactory(factory: GameStateFactory) {
    this.gameStateFactory = factory;
  }

  static fromSavedObject(
    object: any,
    representationFactory: RepresentationFactory,
    gameUnitFactory: GameUnitFactory,
    gameBuildingFactory: GameBuildingFactory,
    gameResourceFactory: GameResourceFactory,
    gameStateFactory: GameStateFactory
  ) {
    let gameRunner = new GameRunner(
      representationFactory,
      gameUnitFactory,
      gameBuildingFactory,
      gameResourceFactory,
      gameStateFactory
    );
    let state = gameRunner.getStateFromObject(object);
    gameRunner.setState(state);
    return gameRunner;
  }

  private getStateFromObject(object: any) {
    return this.gameStateFactory.fromObject(object);
  }

  private generateAllGameObjectsFromState() {
    this.generateGameUnits();
    this.generateGameBuildings();
    this.generateGameResources();
  }

  private generateGameResources() {
    let resources = this.state.getAllResources();
    while (true) {
      let resource = resources.next();
      if (resource.done) {
        break;
      }
      let gameResourceRunner: GameResourceRunner = new GameResourceRunner(
        resource.value,
        this.representationFactory
      );
      this.insertGameResourceRunner(gameResourceRunner);
    }
  }

  private insertGameResourceRunner(gameResourceRunner: GameResourceRunner) {
    this.gameResourceRunners.set(
      gameResourceRunner.getId(),
      gameResourceRunner
    );
  }

  private generateGameBuildings() {
    let playerIterator = this.state.getAllPlayers();
    utilities.forEachValueInTheIterator(playerIterator, player => {
      utilities.forEachValueInTheIterator(
        player.getBuildings(),
        gameBuilding => {
          let gameBuildingRunner: GameBuildingRunner = new GameBuildingRunner(
            gameBuilding,
            this.representationFactory
          );
          this.insertGameBuildingRunner(gameBuildingRunner);
        }
      );
    });
  }

  private insertGameBuildingRunner(gameBuildingRunner: GameBuildingRunner) {
    this.gameBuildingRunners.set(
      gameBuildingRunner.getId(),
      gameBuildingRunner
    );
  }

  private generateGameUnits() {
    let playerIterator = this.state.getAllPlayers();
    utilities.forEachValueInTheIterator(playerIterator, player => {
      utilities.forEachValueInTheIterator(player.getUnits(), gameUnit => {
        let gameUnitRunner: GameUnitRunner = new GameUnitRunner(gameUnit, this.representationFactory);
        this.insertGameUnitRunner(gameUnitRunner);
      });
    });
  }

  private insertGameUnitRunner(gameUnitRunner: GameUnitRunner) {
    this.gameUnitRunners.set(gameUnitRunner.getId(), gameUnitRunner);
  }

  private setState(state: GameState) {
    this.state = state;
  }

  play() {
    /*
            TO play the game, we generate the map, we generate
            the HUD, and we generate the correct GameObjects based 
            on the state, as well as all the event handling that is 
            necessary for the game to play correctly.

            Use Strategy Pattern here for all these complicated algorithms?
        */

    this.generateAllGameObjectsFromState();
  }

  getState() {
    return this.state;
  }
}

export { GameRunner };
