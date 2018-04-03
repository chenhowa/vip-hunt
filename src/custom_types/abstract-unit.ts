import Damager from "../interfaces/damager";
import Damageable from "../interfaces/damageable";
import Harvester from "../interfaces/harvester";
import Moveable from "../interfaces/moveable";

type AbstractUnit = Damager & Damageable & Harvester & Moveable;

export default AbstractUnit;