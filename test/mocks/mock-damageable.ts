
import Damageable from "../../src/model/interfaces/damageable";

export default class MockDamageable implements Damageable {
    public health = 0;

    takeDamage(damage: number) {
        this.health -= damage;
    }
}