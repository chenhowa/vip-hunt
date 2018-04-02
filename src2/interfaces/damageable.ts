/* Author: Howard Chen
 *
 * Interface for an object to take damage
 */

interface Damageable {
    getHealthPoints(): number;
    takeDamage(attackPoints: number): void;

}

export { Damageable };
