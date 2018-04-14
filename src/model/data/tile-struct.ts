import Coordinates2D from "../../custom_types/coordinates-2d";



export default class TileStruct {
    public coordinates: Coordinates2D = [-1, -1];
    public occupied: boolean = false;
    public walkable: boolean = true;
}