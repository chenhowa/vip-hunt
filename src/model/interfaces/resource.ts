import Identifiable from "./identifiable";
import Damager from "./damager";
import Harvestable from "./harvestable";
import Moveable from "./moveable";
import Drawable from "./drawable";




export default interface Resource extends
    Damager, Harvestable, Moveable, Identifiable, Drawable {
        
}