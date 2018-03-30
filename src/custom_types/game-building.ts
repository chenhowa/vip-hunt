
import { Attacker } from "../interfaces/attacker";
import { Damageable } from "../interfaces/damageable";
import { Identifiable } from "../interfaces/identifiable";
import { Gatherer } from "../interfaces/gatherer";
import { Ranged } from "../interfaces/ranged";
import { Sighted } from "../interfaces/sighted";
import { Owned } from "../interfaces/owned";
import { Locatable2D } from "../interfaces/locatable-2d";

type GameBuilding =
    Attacker & Damageable & Identifiable & Locatable2D & Sighted & Owned
    & Ranged;

export { GameBuilding };
