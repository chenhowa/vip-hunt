/* newgame.ts
 *
 * This file contains functions for setting up a New Game.
 *
 */

import * as _ from 'lodash';
import Resource from '../model/resources/resource';
import Building from '../model/buildings/buildings';
import GlobalGameState from '../model/state/global-game-state';
import Unit from '../model/units/units';
import Camera from './camera';
import Construction from './construction';
import Events from './events';
import Global from './global';
import Hud from './hud';
import ImageMap from './image-map';
import JsonMap from './json-map';
import Mouse from './mouse';
import SceneObjectConstruction from './scene-object-construction';
import { BuildingBuilding, GamePlay } from './gameplay';

declare var wade: any;
declare var TextSprite: any;
declare var SceneObject: any;
declare var Sprite: any;
declare var Animation: any;
declare var IsoCharacter: any;
declare var Path: any;
declare var PhysicsObject: any;
declare var TilemapCharacter: any;

const NewGame = {
    // Initializes a new game
    initialize: () => {
        //Initialize isometric engine to allow diagonal movement.

        //Set up global settings and sync with scene.
        const global = Global.createGlobalSettings();
        addToScene(global.state);

        //Add basic camera settings
        Events.addCamera();
        Camera.setBounds();

        //Show resources on a fixed Layer 9
        wade.setLayerTransform(9, 0, 0);
        const resources = Hud.showResourcePanel();

        //Add background on a fixed layer 10
        const scroll = Hud.showBackground();
        wade.setLayerTransform(10, 0, 0);

        // Add building button for building units.
        // Set up callbacks for building a unit using the underlying menu.
        const building = Hud.showMainPanel();
        building.onClick = function(event) {
            //Make the clicked building disappear
            Hud.clearMainPanel();

            //Show the player new buttons for making buildings on map
            const options = Hud.showBuildingsPanel();

            // Function that takes a buildingIcon and sets its click event
            // to build a matching building in the game world.
            const setOnClickToBuild = (b) => {
                const imageName = b.getSprite(0).getImageName();
                b.onClick = BuildingBuilding.selectABuildingCallback(imageName, options);
                wade.addEventListener(b, 'onClick');
            };

            //Process each icon to have correct events
            _.forEach(options, setOnClickToBuild);
        };
        wade.addEventListener(building, 'onClick');
    },
};

// This funcion takes a GlobalGameState and attempts to add every Unit, Building,
// and Resource in its map, to the WADE Scene. This should only be used with a
// WADE scene that has an EMPTY map, to avoid collisions.
//
// parameters:
//  @ state: The Global Game State that needs to be added to the WADE map.
function addToScene(state: GlobalGameState) {
    _.forEach(state.map, (row) => {
        _.forEach(row, (tile) => {
            if (tile.buildingId >= 0) {
                let building = _.find(state.getPlayer().getBuildings(), (b) => {
                    return b.id === tile.buildingId;
                });
                if ( !building )  {
                    //Otherwise the building is an ai building
                    building = _.find(state.getAi().getBuildings(), (b) => {
                        return b.id === tile.buildingId;
                    });
                }
                console.log(building);

                // Once we have the building, we can paint it on the appropriate
                // grid position with the appropriate image
                const b = constructBuildingFromModel(building);
                console.log(b);
                b.data = building;
                building.rep = b; // circular reference
                wade.iso.moveObjectToTile(b, tile.x, tile.y);
                GamePlay.updateBuildingMapLocation(b);

                //Then we attach the appropriate callbacks for a constructed building
                let displayFn;
                const c = building.getClassName();
                if (c === 'Barracks') {
                    displayFn = Hud.showBarracksPanel;
                } else if (c === 'Stables') {
                    displayFn = Hud.showBarracksPanel;
                } else if (c === 'TownHall') {
                    displayFn = Hud.showBarracksPanel;
                } else if (c === 'Tower') {
                    displayFn = Hud.showBarracksPanel;
                }
                b.onMouseDown = GamePlay.onSelectBuilding(b, displayFn);
                wade.addEventListener(b, 'onMouseDown');

            }
            if (tile.unitId >= 0) {
                let unit = _.find(state.getPlayer().getUnits(), (u) => {
                    return u.id === tile.unitId;
                });
                if ( !unit )  {
                    //Otherwise the unit is an ai unit
                    unit = _.find(state.getAi().getUnits(), (u) => {
                        return u.id === tile.unitId;
                    });
                }

                console.log(unit);

                // Once we have the unit, we can paint it on the appropriate
                // grid position with the appropriate image
                const u = constructUnitFromModel(unit);
                u.data = unit;
                unit.rep = u; //circular reference
                wade.iso.moveObjectToTile(u, tile.x, tile.y);
                GamePlay.updateUnitMapLocation(u);

                //Then we attach the appropriate callbacks for a constructed unit.
                u.onMouseDown = GamePlay.onSelectUnit(u);
                wade.addEventListener(u, 'onMouseDown');
            
            }

            if (tile.resourceId >= 0) {
                let resource = _.find(state.getResources(), (r) => {
                    return r.getId() === tile.resourceId; 
                });

                console.log(resource);

                // Once we have the resource, we can paint it on the appropriate
                // grid position with the correct image

                const r = constructResourceFromModel(resource);
                r.data = resource;
                resource.rep = r; //circular reference
                wade.iso.moveObjectToTile(r, tile.x, tile.y);
                GamePlay.updateResourceMapLocation(r);

                //Then we attach the appropriate callbacks for a constructed resource
                r.onMouseDown = GamePlay.onSelectResource(r);
                wade.addEventListener(r, 'onMouseDown');

            }
    
        });
    });

}

function constructResourceFromModel(resource: Resource) {
    let r;
    console.log("Constructing resource");

    if(resource.getClassName() === 'Stone') {
        r = SceneObjectConstruction.stone(JsonMap.stone);
    } else if (resource.getClassName() === 'Wood') {
        r = SceneObjectConstruction.wood(JsonMap.wood); 
    } else if (resource.getClassName() === 'Food') {
        r = SceneObjectConstruction.food(JsonMap.food); 
    }
    else {
        console.log("Error in constructResourceFromModel") ;
    }

    return r;
}

// This function takes a Building and returns the correct 
// SceneObject for that Building.
function constructBuildingFromModel(building: Building) {
    let b;
    if (building.getClassName() === 'Barracks') {
        b = SceneObjectConstruction.barracks(JsonMap.barracks_1);
    } else if (building.getClassName() === 'Stables') {
        b = SceneObjectConstruction.stables(JsonMap.stables_1);
    } else if (building.getClassName() === 'TownHall') {
        b = SceneObjectConstruction.townHalls(JsonMap.town_halls_1);
    } else if (building.getClassName() === 'Tower') {
        b = SceneObjectConstruction.towers(JsonMap.towers_1);
    }
    return b;
}

// This function takes a Unit and returns the correct 
// SceneObject for that Unit
function constructUnitFromModel(unit: Unit) {
    let u;
    if (unit.getClassName() === 'VIP') {
        u = SceneObjectConstruction.vip(JsonMap.vip_1);
    } else if (unit.getClassName() === 'Archer') {
        u = SceneObjectConstruction.archer(JsonMap.archer_1);
    } else if (unit.getClassName() === 'Swordsman') {
        u = SceneObjectConstruction.swordsman(JsonMap.swordsman_1);
    } else if (unit.getClassName() === 'Gatherer') {
        u = SceneObjectConstruction.gatherer(JsonMap.gatherer_1);
    } else if (unit.getClassName() === 'DrummerBoy') {
        u = SceneObjectConstruction.drummerBoy(JsonMap.drummer_boy_1);
    } else if (unit.getClassName() === 'SpearCalvary') {
        u = SceneObjectConstruction.spearCalvary(JsonMap.spear_calvary_1);
    } else if (unit.getClassName() === 'ArcherCalvary') {
        u = SceneObjectConstruction.archerCalvary(JsonMap.archer_calvary_1);
    }
    return u;
}

export default NewGame;
