/* menu.ts
 *
 * This function contains the various functions needed to display the
 * game's starting menu.
 *
 */

import * as _ from 'lodash';

import AudioMap from './audio-map';
import Events from './events';
import Hud from './hud';
import NewGame from './newgame';
import Camera from './camera';
import SaveGame from './savegame';

declare var wade: any;
declare var TextSprite: any;
declare var SceneObject: any;
declare var Sprite: any;
declare var Animation: any;
declare var IsoCharacter: any;
declare var Path: any;
declare var PhysicsObject: any;
declare var TilemapCharacter: any;

// This function sets up an asynchronouse delay that allows for
// delayed while loops
//Based on https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html which gives an example of the delay function.
async function delay(milliseconds: number) {
    return new Promise<void>((resolve) => {
        wade.setTimeout(resolve, milliseconds);
    });
}


let music_id = -1;
const displayWelcome = async function() {
    function playMenuMusic() {
        music_id = wade.playAudio(AudioMap.familiar_roads, false, async () => {
            wade.setTimeout(() => {
                music_id = wade.playAudio(AudioMap.deserve_to_be, false, async () => {
                    wade.setTimeout(() => {
                        music_id = wade.playAudio(AudioMap.menu_music, false, async () => {
                            wade.setTimeout(() => {
                                music_id = wade.playAudio(AudioMap.from_here, false, async () => {
                                    wade.setTimeout(() => {
                                        playMenuMusic(); 
                                    }, 4000);
                                });
                            }, 4000);
                        });
                    }, 4000);
                });
            }, 4000)
        });
    }
    playMenuMusic();
    const color = 'white';
    const alignment = 'center';

    //Create the welcome text
    const welcomeText = new TextSprite('Welcome to Potayto-Potahto!', '32px Verdana', color, alignment);
    this.welcomeObject = new SceneObject(welcomeText);
    wade.addSceneObject(this.welcomeObject);
    this.welcomeObject.setPosition(0, -100);

    //Create the new game text
    const newGameText = new TextSprite('New Game', '20px Verdana', color, alignment);
    this.newGameObject = new SceneObject(newGameText);
    wade.addSceneObject(this.newGameObject);
    setupNewGame.call(this);

    // Create the Load Game text
    const loadGameText = new TextSprite('Load Game', '20px Verdana', color, alignment);
    this.loadGameObject = new SceneObject(loadGameText);
    wade.addSceneObject(this.loadGameObject);
    setupSaveGame.call(this);

    // Create the settings text
    const settingsText = new TextSprite('Settings', '20px Verdana', color, alignment);
    this.settingsObject = new SceneObject(settingsText);
    wade.addSceneObject(this.settingsObject);
    setupSettings.call(this);

};

function setupSettings() {
    this.settingsObject.setPosition(0, 100);
    setMouseInOut(this.settingsObject);

    // this.settingsObject.onClick = settings.call(this);
    // wade.addEventListener(this.loadGameObject, 'onClick');

}

const setupSaveGame = function () {
    this.loadGameObject.setPosition(0, 50);
    setMouseInOut(this.loadGameObject);

    this.loadGameObject.onClick = function() {
        wade.stopAudio(music_id);
        let savedGame = JSON.parse(wade.retrieveLocalObject('save_game'));
        wade.setJson('savedGameScene.wsc', savedGame);

        //the line below was purely for testing purposes to make sure
        //info was correct
        //let testing = wade.getJson('savedGameScene.json');

        wade.importScene(wade.getJson('savedGameScene.wsc'), true, () => {
            SaveGame.initialize();
        }, false, true);

    };
    wade.addEventListener(this.loadGameObject, 'onClick');      
};

const setupNewGame = function() {
    this.newGameObject.setPosition(0, 0);

    setMouseInOut(this.newGameObject);

    this.newGameObject.onClick = function() {
        wade.stopAudio(music_id);
        const clearscene = true;
        // load the map
        /*
        wade.loadScene('../public/scene1.wsc', null, function() {
            NewGame.initialize();
        }, clearscene);
        */
        
        wade.loadScene('../public/large_grass_map.wsc', null, function() {
            NewGame.initialize();
        }, clearscene);
        
    };
    wade.addEventListener(this.newGameObject, 'onClick');
};

// Helper function that returns a function that will change a textObject's
// color
function changeColor(textObject: any, color: string) {
    return function(event: any) {
        textObject.getSprite(0).setColor(color);
    };
}

// Helper function that adds color changes to a textObject on the
// mouseIn and MouseOut events
function setMouseInOut(textObject: any) {
    textObject.onMouseIn = changeColor(textObject, 'red');
    wade.addEventListener(textObject, 'onMouseIn');

    textObject.onMouseOut = changeColor(textObject, 'white');
    wade.addEventListener(textObject, 'onMouseOut');
}

export { displayWelcome };
