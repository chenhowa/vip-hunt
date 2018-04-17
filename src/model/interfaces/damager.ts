import Damageable from "./damageable";



export default interface Damager {
    dealDamage(target: Damageable);
}