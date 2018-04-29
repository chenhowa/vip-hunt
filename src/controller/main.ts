import AudioMap from './audio-map';
import ImageMap from './image-map';
import CostMap from "./cost-map";
import SpritesMap from './sprites-map';
import DataMap from './data-map';
import GameRunner from './game-runner';

declare var App: any;
declare var wade: any;


// The WADE framework launches the game starting from the global App variable.
App = function() {
    this.init = function initializeGame() {
        //Allow diagonal and straight movement in the game
        wade.iso.init({movementDirection: 'both'});

       
        //load the map to prove this works.
        wade.loadScene('../public/large_grass_map.wsc', null, () => {
            let runner = GameRunner.toNewGame(2, 1);
            runner.play();
            console.log(runner);
            console.log("Scene loaded!");
        });
    };

    this.load = function asyncLoading() {
        wade.setLoadingBar(true, {x: 0, y: 0}, 'white', 'black');
        loadImages();
        loadSpriteJson();
        loadDataJson();
        loadCostJson();
        loadAudio();
    };

};

function loadAudio() {
    for(let name of Object.getOwnPropertyNames(AudioMap)) {
        let filename = AudioMap[name];
        wade.loadAudio(filename);
    }
}

function loadCostJson() {
    for(let name of Object.getOwnPropertyNames(CostMap)) {
        let filename = CostMap[name];
        wade.loadJson(filename);
    }
}

function loadDataJson() {
    for(let name of Object.getOwnPropertyNames(DataMap)) {
        let filename = DataMap[name];
        wade.loadJson(filename);
    }
}

function loadImages() {
    for(let name of Object.getOwnPropertyNames(ImageMap)) {
        let filename = ImageMap[name];
        wade.loadImage(filename);
    }
}

function loadSpriteJson() {
    for(let name of Object.getOwnPropertyNames(SpritesMap)) {
        let filename = SpritesMap[name];
        wade.loadJson(filename);
    }
}
