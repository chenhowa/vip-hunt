/* build-hud.ts
 *
 * The BuildHud module provides various functions that utilize wade
 * to build HUD elements when they did not exist previously.
 */

import * as _ from 'lodash';
import ImageMap from '../controller/image-map';
import CostMap from '../controller/cost-map';

declare var wade: any;
declare var TextSprite: any;
declare var SceneObject: any;
declare var Sprite: any;
declare var Animation: any;


enum HudLayer {
    BACKGROUND = 10,
    MAIN = 9
};

const BuildHud = {
    // This function builds a resource panel consisting of stone, wood, and food
    // icons and associated text that list the amount stored in the GLOBAL object.
    // Currently it constructs each icon at a fixed location. To change those locations,
    // you change the constants in this function.
    //
    // parameters:
    //  @ layerId: an integer that indicates which WADE layer to draw on. Recall that
    //      a smaller number (down to 1) means the resourcePanel will be drawn on
    //      TOP of other elements on layers with larger numbers.
    resourcePanel: (totalFood: number, totalStone: number, totalWood: number) => {
        const font = '10px Verdana';
        const color = 'black';
        const alignment = 'center';

        const width = 20;
        const height = 20;

        let y = (wade.getScreenHeight() / 2) - 210;
        let x = (wade.getScreenWidth() / 2) - 50;
        const stone = buildIcon(ImageMap.stoneIcon, width, height, x, y, HudLayer.MAIN);
        stone.setAlignment('right', 'bottom');
        let y2 = y;
        let x2 = x + 15;
        const stoneCount = BuildHud.buildText(stone,
                                font, color, alignment, x2, y2, HudLayer.MAIN);
        stoneCount.setAlignment('right', 'bottom');

        y = y;
        x = x - 100;
        const wood = buildIcon(ImageMap.woodIcon, width, height, x, y, HudLayer.MAIN);
        wood.setAlignment('right', 'bottom');
        y2 = y;
        x2 = x + 20;
        const woodCount = BuildHud.buildText(wood,
                                font, color, alignment, x2, y2, HudLayer.MAIN);
        woodCount.setAlignment('right', 'bottom');

        y = y;
        x = x - 100;
        const food = buildIcon(ImageMap.foodIcon, width, height, x, y, HudLayer.MAIN);
        food.setAlignment('right', 'bottom');
        y2 = y;
        x2 = x + 15;
        const foodCount = BuildHud.buildText(food,
                                font, color, alignment, x2, y2, HudLayer.MAIN);
        foodCount.setAlignment('right', 'bottom');

        const all = [stone, wood, food, stoneCount, woodCount, foodCount];
        _.forEach(all, (item) => {
            item.dontSave = true;
            item.setVisible(false);
        });

        return all;

    },
    // This function builds a text icon.
    //
    // parameters:
    //  @ text: the text to display
    //  @ font: the font to use.
    //  @ color: the color of the text to display.
    //  @ alignment: 'left', 'center', or 'right'
    //  @ x: the worldspace x-coordinate to place icon.
    //  @ y: the worldspace y-coordinate to place icon.
    //  @ layer: the WADE layer to put the icon on.
    buildText: (text: string, font: string, color: string, alignment: string, x: number, y: number, layerId: number) => {
        const sprite = new TextSprite(text, font, color, alignment, layerId);
        const sceneObj = new SceneObject(sprite);
        sceneObj.setPosition(x, y);
        wade.addSceneObject(sceneObj);
        return sceneObj;
    },
    // This function builds the main panel, consisting of icons for
    // things like building building,
    // file saving, seeing the main menu, pausing the game, etc.
    //
    // parameters:
    //  @ layer: the WADE layer to draw the panel on.
    mainPanel: () => {
        const buildingSprite = new Sprite(ImageMap.buildingIcon, HudLayer.MAIN);
        buildingSprite.setSize(50, 50);

        //Add building icon to screen.
        const building = new SceneObject(buildingSprite);
        building.setPosition((-1 * wade.getScreenWidth() / 2) + 100, (wade.getScreenHeight() / 2) - 100);
        wade.addSceneObject(building);
        building.setAlignment('left', 'bottom');

        // Add Pause-Menu icon to screen.
        const x = (-1 * wade.getScreenWidth() / 2) + 200;
        const y = (wade.getScreenHeight() / 2) - 100;
        const menu = BuildHud.buildText('Menu', '16px Verdana', 'black', 'center',
                                x, y, HudLayer.MAIN);
        menu.setAlignment('left', 'bottom');

        const all = [building, menu];
        _.forEach(all, (item) => {
            item.setVisible(false);
            item.dontSave = true;
        });

        return all;
    },
    menuPanel: () => {
        const font = '16px Verdana';
        const color = 'black';
        const alignment = 'center';

        const save = BuildHud.buildText('Save', font, color, alignment, 0, -125, HudLayer.MAIN);
        const resume = BuildHud.buildText('Resume', font, color, alignment, 0, -25, HudLayer.MAIN);
        const quit = BuildHud.buildText('Quit', font, color, alignment, 0, 75, HudLayer.MAIN);
        const background = BuildHud.menuBackground();

        const all = [save, resume, quit, background];
        _.forEach(all, (item) => {
            item.setVisible(false);
            item.dontSave = true;
        });

        return all;

    },
    winPanel: (layer: number) => {
        const font = '16px Verdana';
        const color = 'black';
        const alignment = 'center';

        const victory = BuildHud.buildText('Victory!', font, color, alignment, 0, -125, layer);
        const menu = BuildHud.buildText('Menu', font, color, alignment, 0, -25, layer);

        const all = [victory, menu];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;

    },
    lossPanel: (layer: number) => {
        const font = '16px Verdana';
        const color = 'black';
        const alignment = 'center';

        const defeat = BuildHud.buildText('Defeat...', font, color, alignment, 0, -125, layer);
        const menu = BuildHud.buildText('Menu', font, color, alignment, 0, -25, layer);

        const all = [defeat, menu];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });

        return all;
    },
    menuBackground: () => {
        const scroll = buildIcon(ImageMap.scroll, 200, 500, 0, 0, HudLayer.BACKGROUND);
        scroll.getSprite(0).usePixelPerfectMouseEvents(255);

        scroll.onMouseDown = prevent_propagation;
        wade.addEventListener(scroll, 'onMouseDown');
        scroll.onClick = prevent_propagation;
        wade.addEventListener(scroll, 'onClick');

        scroll.dontSave = true;
        scroll.setVisible(false);

        return scroll;
    },
    // This function builds the buildings Panel, consisting of the possible buildings that
    // the player can build in the game. Currently this consists of a barracks, stables,
    // towers, and town hall
    //
    // parameters:
    //  @ layer: the WADE layer to draw the panel on.
    buildingsPanel: (layer: number) => {
        const buttonWidth = 50;
        const buttonHeight = 50;

        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';

        let x = (-1 * wade.getScreenWidth() / 2) + 100;
        let y = (wade.getScreenHeight() / 2) - 100;
        const barracks = buildIcon(ImageMap.barracks, buttonWidth, buttonHeight,
                x, y, layer);
        barracks.setAlignment('left', 'bottom');
        let cost = wade.getJson(CostMap.barracks);
        let text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const barracksCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        barracksCost.setAlignment('left', 'bottom');

        x = (-1 * wade.getScreenWidth() / 2) + 200;
        y = (wade.getScreenHeight() / 2) - 100;
        const stables = buildIcon(ImageMap.stables, buttonWidth, buttonHeight,
                x, y, layer);
        stables.setAlignment('left', 'bottom');
        cost = wade.getJson(CostMap.stables);
        text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const stablesCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        stablesCost.setAlignment('left', 'bottom');

        x = (-1 * wade.getScreenWidth() / 2) + 200;
        y = (wade.getScreenHeight() / 2) - 200;
        const towers = buildIcon(ImageMap.towers, buttonWidth, buttonHeight,
                x, y, layer);
        towers.setAlignment('left', 'bottom');
        cost = wade.getJson(CostMap.tower);
        text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const towerCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        towerCost.setAlignment('left', 'bottom');

        x = (-1 * wade.getScreenWidth() / 2) + 100;
        y = (wade.getScreenHeight() / 2) - 200;
        const townHalls = buildIcon(ImageMap.town_halls, buttonWidth,
                buttonHeight, x, y, layer);
        townHalls.setAlignment('left', 'bottom');
        cost = wade.getJson(CostMap.townhall);
        text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const townHallCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        townHallCost.setAlignment('left', 'bottom');

        const all = [
            barracks, stables, towers, townHalls,
            barracksCost, stablesCost, towerCost, townHallCost,
        ];

        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    // This function builds the barracks panel, consisting of the possible units
    // the player can build from the barracks. Currently this consists of a
    // swordsman.
    //
    // parameters:
    //  @ layer: the WADE layer on which to draw the panel.
    barracksPanel: (layer: number) => {
        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';

        let y = (wade.getScreenHeight() / 2) - 200;
        let x = -50;
        const swordsman = buildIcon(ImageMap.sword, 50, 50, x, y, layer);
        swordsman.setAlignment('right', 'bottom');

        let cost = wade.getJson(CostMap.swordsman);
        let text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const swordsmanCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        swordsmanCost.setAlignment('right', 'bottom');

        y = y;
        x = x + 150;
        const archer = buildIcon(ImageMap.bow2, 50, 50, x, y, layer);
        archer.setAlignment('right', 'bottom');
        cost = wade.getJson(CostMap.archer);
        text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const archerCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        archerCost.setAlignment('right', 'bottom');

        const all = [swordsman, archer, swordsmanCost, archerCost];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    stablesPanel: (layer: number) => {
        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';

        let y = (wade.getScreenHeight() / 2) - 200;
        let x = -50;
        const archerCalvary = buildIcon(ImageMap.bow, 120, 80, x,
                        y, layer);
        archerCalvary.setAlignment('right', 'bottom');
        let cost = wade.getJson(CostMap.archer_calvary);
        let text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const archerCalvaryCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        archerCalvaryCost.setAlignment('right', 'bottom');

        y = y;
        x = x + 150;
        const spearCalvary = buildIcon(ImageMap.axe, 70, 70, x,
                            y, layer);
        spearCalvary.setRotation(-1 * Math.PI / 2);
        spearCalvary.setAlignment('right', 'bottom');
        cost = wade.getJson(CostMap.spear_calvary);
        text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const spearCalvaryCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        spearCalvaryCost.setAlignment('right', 'bottom');

        const all = [archerCalvary, spearCalvary, archerCalvaryCost, spearCalvaryCost];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    towerPanel: (layer: number) => {
        const y = (wade.getScreenHeight() / 2) - 200;
        const x = 50;

        const text = BuildHud.buildText("Hi, I'm a tower!", '20px Verdana', 'black', 'center',
                    x, y, layer);
        text.setAlignment('right', 'bottom');
        const all = [ text ];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    townHallPanel: (layer: number) => {
        const font = '12px Verdana';
        const color = 'black';

        const alignment = 'center';
        let y = (wade.getScreenHeight() / 2) - 200;
        let x = -50;
        const gatherer = buildIcon(ImageMap.fist, 50, 50, x, y, layer);
        gatherer.setAlignment('right', 'bottom');
        let cost = wade.getJson(CostMap.gatherer);
        let text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const gathererCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        gathererCost.setAlignment('right', 'bottom');

        y = y;
        x = x + 150;
        const drummer = buildIcon(ImageMap.hammer, 100, 50, x, y, layer);
        drummer.setRotation(-1 * Math.PI / 2);
        drummer.setAlignment('right', 'bottom');
        cost = wade.getJson(CostMap.drummer_boy);
        text = 'stone: ' + cost.stone + '\n wood: ' + cost.wood +
                                '\n food: ' + cost.food;
        const drummerBoyCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        drummerBoyCost.setAlignment('right', 'bottom');

        const all = [gatherer, drummer, gathererCost, drummerBoyCost];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },

    background: () => {
        const background = buildIcon(ImageMap.scroll, 350, 5000, 0, 300, HudLayer.BACKGROUND);
        background.setRotation(1.5708);
        background.setAlignment('right', 'bottom');

        // The background should prevent propagation of all MOUSE events to the map
        // beneath it.
        // HOWEVER, allow onMouseMove and onMouseWheel so that mouse can control camera near
        // bottom of the screen and zooming is still possible.
        background.onClick = prevent_propagation;
        wade.addEventListener(background, 'onClick');
        background.onMouseDown = prevent_propagation;
        wade.addEventListener(background, 'onMouseDown');
        background.onMouseUp = prevent_propagation;
        wade.addEventListener(background, 'onMouseUp');
        // scroll.onMouseWheel = prevent_propagation;
        // wade.addEventListener(scroll, 'onMouseWheel');
        // scroll.onMouseMove = prevent_propagation;
        // wade.addEventListener(scroll, 'onMouseMove');
        background.onMouseIn = prevent_propagation;
        wade.addEventListener(background, 'onMouseIn');
        background.onMouseOut = prevent_propagation;
        wade.addEventListener(background, 'onMouseOut');

        background.dontSave = true;
        background.setVisible(false);

        return [background];

    },
    unitStats: (unitSceneObject, layer: number) => {
        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';
        const y = (wade.getScreenHeight() / 2) - 210;
        const x = (-1 * wade.getScreenWidth() / 2) + 100;

        const text = 'health: ' + unitSceneObject.data.getHp();
        const health = BuildHud.buildText(text, font, color, alignment, x, y, layer);
        health.setAlignment('left', 'bottom');

        const all = [health];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;

    },
    buildingStats: (buildingSceneObject, layer: number) => {
        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';
        const y = (wade.getScreenHeight() / 2) - 210;
        const x = (-1 * wade.getScreenWidth() / 2) + 100;

        const text = 'health: ' + buildingSceneObject.data.getHp();
        const health = BuildHud.buildText(text, font, color, alignment, x, y, layer);
        health.setAlignment('left', 'bottom');

        const all = [health];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    resourceStats: (resourceSceneObject, layer: number) => {
        const text = 'amount: ' + resourceSceneObject.data.getAmount().toString();
        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';
        const y = (wade.getScreenHeight() / 2) - 210;
        const x = (-1 * wade.getScreenWidth() / 2) + 100;
        const amount = BuildHud.buildText(text, font, color, alignment, x, y, layer);
        amount.setAlignment('left', 'bottom');

        const all = [amount];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });

        return all;
    },
    resourceError: (layer: number) => {
        const text = 'Not enough resources!';
        const font = '18px Verdana';
        const color = 'red';
        const alignment = 'center';
        const y = (wade.getScreenHeight() / 2) - 210;
        const x = (-1 * wade.getScreenHeight() / 2) + 100;

        const error = BuildHud.buildText(text, font, color, alignment, x, y, layer);
        error.setAlignment('right', 'bottom');
        const all = [error];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },

};

// This function constructs a building icon for the HUD and adds it to the scene.
//
// parameters:
//  @ imgStr: name of image file to use.
//  @ width: worldspace width of resulting icon.
//  @ height: worldspace height of resulting icon.
//  @ x: worldspace x-coordinate to place icon.
//  @ y: worldspace y-coordinate to place icon.
//  @ layer: The WADE layer to put the icon on.
function buildIcon (imgStr: string, width: number, height: number,
    x: number, y: number, layer: number) {
    const sprite = new Sprite(imgStr, layer);
    sprite.setSize(width, height);
    const sceneObj = new SceneObject(sprite);
    sceneObj.setPosition(x, y);
    wade.addSceneObject(sceneObj);

    return sceneObj;
}

const prevent_propagation = (event) => {
    return true;

};

export default BuildHud;
