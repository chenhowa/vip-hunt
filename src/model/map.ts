
import * as _ from "lodash";

import TileStruct from "./data/tile-struct";
import Coordinates2D from "../custom_types/coordinates-2d";


export default class Map {
    
    constructor(private tileGrid: TileStruct[][] ) {

    }

    clearAll() {
        _.forEach(this.tileGrid, (column) => {
            _.forEach(column, (tile) => {
                tile.occupied = false;
                tile.walkable = true;
            })
        })
    }

    clear(coord: Coordinates2D) {
        let tile = this.tileGrid[coord[0]][coord[1]];
        tile.occupied = false;
        tile.walkable = true;
    }

    isClear(coord: Coordinates2D) {

        let tile = this.tileGrid[coord[0]][coord[1]];

        return tile.walkable && !tile.occupied;
    }
}