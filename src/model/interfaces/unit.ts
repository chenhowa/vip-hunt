import Drawable from "./drawable";
import Identifiable from "./identifiable";
import Damageable from "./damageable";
import Moveable from "./moveable";
import Damager from "./damager";
import Harvester from "./harvester";






export default interface Unit extends
    Drawable, Identifiable, Damageable, Moveable, Damager, Harvester {

}