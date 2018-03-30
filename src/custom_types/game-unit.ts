import { Attacker } from "../interfaces/attacker";
import { Damageable } from "../interfaces/damageable";
import { Identifiable } from "../interfaces/identifiable";
import { Moveable } from "../interfaces/moveable";
import { Gatherer } from "../interfaces/gatherer";
import { Ranged } from "../interfaces/ranged";
import { Sighted } from "../interfaces/sighted";
import { Owned } from "../interfaces/owned";
import { Locatable2D } from "../interfaces/locatable-2d";

type GameUnit =
    Attacker & Damageable & Identifiable & Moveable & Gatherer
    & Ranged & Sighted & Owned & Locatable2D;


export { GameUnit };
