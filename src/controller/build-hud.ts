/* build-hud.ts
 *
 * The BuildHud module provides various functions that utilize wade
 * to build HUD elements when they did not exist previously.
 */

import * as _ from 'lodash';
import ImageMap from './image-map';
import Names from './names';
import JsonMap from './json-map';


declare var wade: any;
declare var TextSprite: any;
declare var SceneObject: any;
declare var Sprite: any;
declare var Animation: any;
declare var IsoCharacter: any;
declare var Path: any;
declare var PhysicsObject: any;
declare var TilemapCharacter: any;

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
    resourcePanel: (layerId: number) => {
        const global = wade.getSceneObject('global');
        const font = '10px Verdana';
        const color = 'black';
        const alignment = 'center';

        const width = 20;
        const height = 20;

        let y = (wade.getScreenHeight() / 2) - 210;
        let x = (wade.getScreenWidth() / 2) - 50;
        const stone = BuildHud.buildIcon(ImageMap.stoneIcon, width, height, x, y, layerId);
        stone.setAlignment('right', 'bottom');
        stone.setName(Names.stoneIcon);
        let y2 = y;
        let x2 = x + 15;
        const stoneCount = BuildHud.buildText(global.state.getPlayer().stone.toString(),
                                font, color, alignment, x2, y2, layerId);
        stoneCount.setAlignment('right', 'bottom');
        stoneCount.setName(Names.stoneCount);

        y = y;
        x = x - 100;
        const wood = BuildHud.buildIcon(ImageMap.woodIcon, width, height, x, y, layerId);
        wood.setAlignment('right', 'bottom');
        wood.setName(Names.woodIcon);
        y2 = y;
        x2 = x + 20;
        const woodCount = BuildHud.buildText(global.state.getPlayer().wood.toString(),
                                font, color, alignment, x2, y2, layerId);
        woodCount.setName(Names.woodCount);
        woodCount.setAlignment('right', 'bottom');

        y = y;
        x = x - 100;
        const food = BuildHud.buildIcon(ImageMap.foodIcon, width, height, x, y, layerId);
        food.setName(Names.foodIcon);
        food.setAlignment('right', 'bottom');
        y2 = y;
        x2 = x + 15;
        const foodCount = BuildHud.buildText(global.state.getPlayer().food.toString(),
                                font, color, alignment, x2, y2, layerId);
        foodCount.setName(Names.foodCount);
        foodCount.setAlignment('right', 'bottom');

        let all = [stone, wood, food, stoneCount, woodCount, foodCount];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });

        return all;

    },
    // This function constructs a building icon for the HUD.
    //
    // parameters:
    //  @ imgStr: name of image file to use.
    //  @ width: worldspace width of resulting icon.
    //  @ height: worldspace height of resulting icon.
    //  @ x: worldspace x-coordinate to place icon.
    //  @ y: worldspace y-coordinate to place icon.
    //  @ layer: The WADE layer to put the icon on.
    buildIcon: (imgStr: string, width: number, height: number,
                x: number, y: number, layer: number) => {
        const sprite = new Sprite(imgStr, layer);
        sprite.setSize(width, height);
        const sceneObj = new SceneObject(sprite);
        sceneObj.setPosition(x, y);
        wade.addSceneObject(sceneObj);

        return sceneObj;
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
    mainPanel: (layer: number) => {
        const buildingSprite = new Sprite(ImageMap.buildingIcon, layer);
        buildingSprite.setSize(50, 50);

        //Add building icon to screen.
        const building = new SceneObject(buildingSprite);
        building.setPosition((-1 * wade.getScreenWidth() / 2) + 100, (wade.getScreenHeight() / 2) - 100);
        wade.addSceneObject(building);
        building.setName(Names.buildingIcon);
        building.setAlignment('left', 'bottom');

        // Add Pause-Menu icon to screen.
        let x = (-1 * wade.getScreenWidth() / 2) + 200;
        let y = (wade.getScreenHeight() / 2) - 100;
        const menu = BuildHud.buildText("Menu", "16px Verdana", "black", "center",
                                x, y, layer);
        menu.setName(Names.menuIcon);
        menu.setAlignment('left', 'bottom');

        let all = [building, menu];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        
        return all;
    },
    menuPanel: (layer: number) => {
        let font = "16px Verdana";
        let color = "black";
        let alignment = 'center';

        let save = BuildHud.buildText("Save", font, color, alignment, 0, -125, layer);
        save.setName(Names.menu_save);
        let resume = BuildHud.buildText("Resume", font, color, alignment, 0, -25, layer);
        resume.setName(Names.menu_resume);
        let quit = BuildHud.buildText("Quit", font, color, alignment, 0, 75, layer);
        quit.setName(Names.menu_quit);

        let all = [save, resume, quit];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });

        return all;
    
    },
    winPanel: (layer: number) => {
        let font = "16px Verdana";
        let color = "black";
        let alignment = 'center';

        let victory = BuildHud.buildText("Victory!", font, color, alignment, 0, -125, layer);
        let menu = BuildHud.buildText("Menu", font, color, alignment, 0, -25, layer);

        let all = [victory, menu];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    
    },
    lossPanel: (layer: number) => {
        let font = "16px Verdana";
        let color = "black";
        let alignment = 'center';

        let defeat = BuildHud.buildText("Defeat...", font, color, alignment, 0, -125, layer);
        let menu = BuildHud.buildText("Menu", font, color, alignment, 0, -25, layer);

        let all = [defeat, menu];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });

        return all;
    },
    menuBackground: (layer: number) => {
        const scroll = BuildHud.buildIcon(ImageMap.scroll, 200, 500, 0, 0, layer);
        scroll.setName(Names.menu_background);
        scroll.getSprite(0).usePixelPerfectMouseEvents(255);

        scroll.onMouseDown = prevent_propagation;
        wade.addEventListener(scroll, 'onMouseDown');
        scroll.onClick = prevent_propagation;
        wade.addEventListener(scroll, 'onClick');
        
        scroll.dontSave = true;

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

        let font = "12px Verdana";
        let color = 'black';
        let alignment = 'center';

        let x = (-1 * wade.getScreenWidth() / 2) + 100;
        let y = (wade.getScreenHeight() / 2) - 100;
        const barracks = BuildHud.buildIcon(ImageMap.barracks_1, buttonWidth, buttonHeight,
                x, y, layer);
        barracks.setName(Names.barracksIcon);
        barracks.setAlignment('left', 'bottom');
        let cost = wade.getJson(JsonMap.barracks_cost);
        let text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let barracksCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        barracksCost.setAlignment('left', 'bottom');

        x = (-1 * wade.getScreenWidth() / 2) + 200;
        y = (wade.getScreenHeight() / 2) - 100;
        const stables = BuildHud.buildIcon(ImageMap.stables_1, buttonWidth, buttonHeight,
                x, y, layer);
        stables.setName(Names.stablesIcon);
        stables.setAlignment('left', 'bottom');
        cost = wade.getJson(JsonMap.stables_cost);
        text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let stablesCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        stablesCost.setAlignment('left', 'bottom');

        x = (-1 * wade.getScreenWidth() / 2) + 200;
        y = (wade.getScreenHeight() / 2) - 200;
        const towers = BuildHud.buildIcon(ImageMap.towers_1, buttonWidth, buttonHeight,
                x, y, layer);
        towers.setName(Names.towersIcon);
        towers.setAlignment('left', 'bottom');
        cost = wade.getJson(JsonMap.tower_cost);
        text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let towerCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        towerCost.setAlignment('left', 'bottom');

        x = (-1 * wade.getScreenWidth() / 2) + 100;
        y = (wade.getScreenHeight() / 2) - 200;
        const townHalls = BuildHud.buildIcon(ImageMap.town_halls_1, buttonWidth,
                buttonHeight, x, y, layer);
        townHalls.setName(Names.townHallsIcon);
        townHalls.setAlignment('left', 'bottom');
        cost = wade.getJson(JsonMap.townhall_cost);
        text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let townHallCost = BuildHud.buildText(text, font, color, alignment, x, y + 30,
                                            layer);
        townHallCost.setAlignment('left', 'bottom');

        let all = [
            barracks, stables, towers, townHalls,
            barracksCost, stablesCost, towerCost, townHallCost
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
        let font = "12px Verdana";
        let color = 'black';
        let alignment = 'center';


        let y = (wade.getScreenHeight() / 2) - 200;
        let x = -50;
        const swordsman = BuildHud.buildIcon(ImageMap.swordsman_1, 35, 65, x, y, layer);
        swordsman.setName(Names.swordsmanIcon);
        swordsman.setAlignment('right', 'bottom');

        let cost = wade.getJson(JsonMap.swordsman_cost);
        let text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let swordsmanCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        swordsmanCost.setAlignment('right', 'bottom');

        y = y;
        x = x + 150;
        const archer = BuildHud.buildIcon(ImageMap.archer_1, 90, 150, x, y, layer);
        archer.setAlignment('right', 'bottom');
        cost = wade.getJson(JsonMap.archer_cost);
        text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let archerCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        archerCost.setAlignment('right', 'bottom');

        let all = [swordsman, archer, swordsmanCost, archerCost];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    stablesPanel: (layer: number) => {
        let font = "12px Verdana";
        let color = 'black';
        let alignment = 'center';

        let y = (wade.getScreenHeight() / 2) - 200;
        let x = -50;
        const archerCalvary = BuildHud.buildIcon(ImageMap.archer_calvary_1, 90, 150, x,
                        y, layer);
        archerCalvary.setAlignment('right', 'bottom');
        let cost = wade.getJson(JsonMap.archer_calvary_cost);
        let text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let archerCalvaryCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        archerCalvaryCost.setAlignment('right', 'bottom');
    
        y = y;
        x = x + 150;
        const spearCalvary = BuildHud.buildIcon(ImageMap.spear_calvary_1, 90, 150, x,
                            y, layer);
        spearCalvary.setAlignment('right', 'bottom');
        cost = wade.getJson(JsonMap.spear_calvary_cost);
        text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let spearCalvaryCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        spearCalvaryCost.setAlignment('right', 'bottom');

        let all = [archerCalvary, spearCalvary, archerCalvaryCost, spearCalvaryCost];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    towerPanel: (layer: number) => {
        let y = (wade.getScreenHeight() / 2) - 200;
        let x = 50;

        let text = BuildHud.buildText("Hi, I'm a tower!", "20px Verdana", 'black', "center",
                    x, y, layer);
        text.setAlignment('right', 'bottom');
        let all = [ text ];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },
    townHallPanel: (layer: number) => {
        let font = "12px Verdana";
        let color = 'black';

        let alignment = 'center';
        let y = (wade.getScreenHeight() / 2) - 200;
        let x = -50;
        const gatherer = BuildHud.buildIcon(ImageMap.gatherer_1, 35, 65, x, y, layer);
        gatherer.setAlignment('right', 'bottom');
        let cost = wade.getJson(JsonMap.gatherer_cost);
        let text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let gathererCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        gathererCost.setAlignment('right', 'bottom');

        y = y;
        x = x + 150;
        const drummer = BuildHud.buildIcon(ImageMap.drummer_boy_1, 35, 65, x, y, layer);
        drummer.setAlignment('right', 'bottom');
        cost = wade.getJson(JsonMap.drummer_boy_cost);
        text = "stone: " + cost.stone + "\n wood: " + cost.wood +
                                "\n food: " + cost.food;
        let drummerBoyCost = BuildHud.buildText(text, font, color, alignment, x, y + 100,
                                            layer);
        drummerBoyCost.setAlignment('right', 'bottom');

        let all = [gatherer, drummer, gathererCost, drummerBoyCost];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    },

    // This function builds the background panel, which is the background for the HUD
    // in general. Currently this consists of a single sretched scroll image, but this
    // could be expanded to look better.
    //
    // parameters:
    //  @ layer: the WADE layer on which to draw the panel.
    background: (layer: number) => {
        const scroll = BuildHud.buildIcon(ImageMap.scroll, 350, 5000, 0, 300, layer);
        scroll.setRotation(1.5708);
        scroll.setName(Names.hudBackground);
        scroll.setAlignment('right', 'bottom');

        // The background should prevent propagation of all MOUSE events to the map 
        // beneath it.
        // HOWEVER, allow onMouseMove and onMouseWheel so that mouse can control camera near 
        // bottom of the screen and zooming is still possible.
        scroll.onClick = prevent_propagation;
        wade.addEventListener(scroll, 'onClick');
        scroll.onMouseDown = prevent_propagation;
        wade.addEventListener(scroll, 'onMouseDown');
        scroll.onMouseUp = prevent_propagation;
        wade.addEventListener(scroll, 'onMouseUp');
        // scroll.onMouseWheel = prevent_propagation;
        // wade.addEventListener(scroll, 'onMouseWheel');
        // scroll.onMouseMove = prevent_propagation;
        // wade.addEventListener(scroll, 'onMouseMove');
        scroll.onMouseIn = prevent_propagation;
        wade.addEventListener(scroll, 'onMouseIn');
        scroll.onMouseOut = prevent_propagation;
        wade.addEventListener(scroll, 'onMouseOut');

        scroll.dontSave = true;

        return scroll;

    },
    unitStats: (unitSceneObject, layer: number) => {
        const font = '12px Verdana';
        const color = 'black';
        const alignment = 'center';
        const y = (wade.getScreenHeight() / 2) - 210;
        const x = (-1 * wade.getScreenWidth() / 2) + 100;

        const text = 'health: ' + unitSceneObject.data.getHp();
        const health = BuildHud.buildText(text, font, color, alignment, x, y, layer);
        health.setAlignment('right', 'bottom');

        let all = [health];
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
        health.setAlignment('right', 'bottom');

        let all = [health];
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
        amount.setAlignment('right', 'bottom');

        let all = [amount];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });

        return all;
    },
    resourceError: (layer: number) => {
        const text = "Not enough resources!";
        const font = "18px Verdana";
        const color = 'red';
        const alignment = 'center';
        const y = (wade.getScreenHeight() / 2) - 210;
        const x = (-1 * wade.getScreenHeight() / 2) + 100;

        const error = BuildHud.buildText(text, font, color, alignment, x, y, layer);
        error.setAlignment('right', 'bottom');
        let all = [error];
        _.forEach(all, (item) => {
            item.dontSave = true;
        });
        return all;
    }

};

var prevent_propagation = (event) => {
    return true;

}

export default BuildHud;
