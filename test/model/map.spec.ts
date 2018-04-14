import { expect } from "chai";
import "mocha";
import { spy } from "sinon";
import * as _ from "lodash";

import TileStruct from "../../src/model/data/tile-struct";
import Map from "../../src/model/map";


describe("Map class correctly", () => {
    it("clears the map", () => {
        let mapSideLength = 10;
        let map: Map;
        givenNewFullyOccupiedMap();
        map.clearAll();
        checkMapIsEmpty();
        

        function givenNewFullyOccupiedMap() {
            let occupiedTile = new TileStruct();
            occupiedTile.walkable = false;
            occupiedTile.occupied = true;
        
            let tileGrid: TileStruct[][] = [];
            for(let i = 0; i < mapSideLength; i++) {
                tileGrid.push([]);
                for(let j = 0; j < mapSideLength; j++) {
                    occupiedTile.coordinates = [i, j];
                    tileGrid[i].push(_.cloneDeep(occupiedTile));
                }
            }

            map = new Map(tileGrid);
        
        }

        function checkMapIsEmpty() {
            for(let i = 0; i < mapSideLength; i++) {
                for(let j = 0; j < mapSideLength; j++) {
                    expect(map.isClear([i, j])).to.be.true;
                }
            }
        }
    })
});

