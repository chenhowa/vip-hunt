
import * as _ from "lodash";

import TileStruct from "./tile-struct";


export default class Map {
    
    constructor(private tileGrid: TileStruct[][] ) {

    }

    clear() {
        _.forEach(this.tileGrid, (column) => {
            _.forEach(column, (tile) => {
                tile.occupied = false;
                tile.walkable = true;
            })
        })
    }
}