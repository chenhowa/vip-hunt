import Hud from "../../src/view/interfaces/hud";
import { Request } from "../../src/model/interfaces/request";


export default class MockHud implements Hud {

    public visibleBarracksPanel = false;
    public visibleMainPanel = false;
    public visiblePlayerResources = false;

    constructor() {

    }

    showPlayerResources() {
        this.visiblePlayerResources = true;
    }

    showBarracksPanel() {

    }

    showStablesPanel() {

    }

    showTownHallPanel() {

    }

    showTowerPanel() {

    }

    showMainPanel() {
        this.visibleMainPanel = true;
    }

    showSelectedUnit() {

    }

    showSelectedBuilding() {

    }

    showSelectedResource() {

    }
}