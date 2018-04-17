import Damager from "./damager";
import Damageable from "./damageable";
import Harvester from "./harvester";
import Moveable from "./moveable";
import Drawable from "./drawable";
import Identifiable from "./identifiable";



export default interface Building
    extends Damager, Damageable, Harvester, Moveable, Drawable, Identifiable {

}