import Hud from "./interfaces/hud";
import BuildHud from "./build-hud";
import * as _ from "lodash";
import { Request } from "../model/interfaces/request";
import GameInfo from "../model/game-info";

declare var SceneObject: any;
declare var wade: any;

enum Widgets {
    Main,
    Background,
    Menu,
    PlayerResources,
}


export default class DefaultHud implements Hud {
    private widgets: Map<Widgets, Array<typeof SceneObject>> = new Map();

    constructor(private source: GameInfo) {
        // Construct all necessary hud elements before the game starts, to minimize in-game construction.
        this.addWidget(Widgets.Background, BuildHud.background());
        this.addWidget(Widgets.Main, BuildHud.mainPanel());
        this.addWidget(Widgets.Menu, BuildHud.menuPanel());
        this.addWidget(Widgets.PlayerResources,
            BuildHud.resourcePanel(this.source.getFood(), this.source.getStone(), this.source.getWood()));

        // Fix the HUD layer so it displays correctly.
        this.fixHudDisplay();

    }


    private addWidget(key: Widgets, value: Array<typeof SceneObject>) {
        this.widgets.set(key, value);
    }

    private fixHudDisplay() {
        // Set up WADE layers to display correctly.
        wade.setLayerSorting(9, 'bottomToTop');
        wade.setLayerTransform(8, 0, 0);
        wade.setLayerTransform(9, 0, 0);
        wade.setLayerTransform(10, 0, 0);
    }

    private showBackground() {
        let background = this.widgets.get(Widgets.Background);
        _.forEach(background, (widget) => {
            widget.setVisible(true);
        })
    }

    private showBarracksPanel() {

    }

    private showTowerPanel() {

    }

    private showTownHallPanel() {

    }

    private showStablesPanel() {

    }

    private showMainPanel() {
        let panel = this.widgets.get(Widgets.Main);
        _.forEach(panel, (widget) => {
            widget.setVisible(true);
        })
    }

    private showSelectedUnit() {
       
    }

    private showSelectedBuilding() {

    }

    private showSelectedResource() {

    }

    private showPlayerResources() {
        let resourceWidgets = this.widgets.get(Widgets.PlayerResources);
        _.forEach(resourceWidgets, (widget) => {
            widget.setVisible(true);
        });
    }

    private showMenuPanel() {
        let menuWidgets = this.widgets.get(Widgets.Menu);
        _.forEach(menuWidgets, (widget) => {
            widget.setVisible(true);
        })
    }

    display() {
        this.showBackground();
        this.showMainPanel();
        this.showMenuPanel();
        this.showPlayerResources();
    }

    handle(req: Request) {

    }
}