import Hud from "./interfaces/hud";
import BuildHud from "./build-hud";

declare var SceneObject: any;


export default class DefaultHud implements Hud {
    private widgets: Map<string, typeof SceneObject> = new Map();

    constructor() {
        // Construct all necessary hud elements before the game starts, to minimize in-game construction.
        this.widgets.set("background", BuildHud.background());

    }

    showBackground() {
        let background = this.widgets.get("background");
        background.setVisible(true);
    }

    showBarracksPanel() {

    }

    showTowerPanel() {

    }

    showTownHallPanel() {

    }

    showStablesPanel() {

    }

    showMainPanel() {
        let panel = this.widgets.get("main");
        panel.setVisible(true);
    }

    showSelectedUnit() {
       
    }

    showSelectedBuilding() {

    }

    showSelectedResource() {

    }

    showPlayerResources() {

    }
}