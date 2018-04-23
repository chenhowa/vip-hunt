import Drawable from "./drawable";
import Identifiable from "./identifiable";
import Damageable from "./damageable";
import Moveable from "./moveable";
import Damager from "./damager";
import Harvester from "./harvester";
import RequestHandler from "./request-handler";






export default interface Unit extends
    Drawable, Identifiable, Damageable, Moveable, Damager, Harvester {

}