import Damager from "../interfaces/damager";
import Damageable from "../interfaces/damageable";

type AbstractBuilding = Damager & Damageable;

export default AbstractBuilding;