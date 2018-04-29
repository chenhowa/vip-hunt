
/* keys.ts
 *
 * The Keys module makes it easier to work with key pressing by providing functions that
 * indicate whether a key press is up, down, left, and right, according to the game
 * settings.
 */

 declare var wade: any;

const Keys = {
    up() {
        return this.w;
    },
    down() {
        return this.s;
    },
    left() {
        return this.a;
    },
    right() {
        return this.d;
    },
    a: 65,
    d: 68,
    s: 83,
    w: 87,

    opposingKeysPressed: (): boolean => {
        if (wade.isKeyDown(Keys.left()) && wade.isKeyDown(Keys.right() ) ) {
            return true;
        }
        if (wade.isKeyDown(Keys.up()) && wade.isKeyDown(Keys.down() ) ) {
            return true;
        }

        return false;
    },
    noKeysPressed: (): boolean => {
        return !wade.isKeyDown(Keys.up() ) &&
                !wade.isKeyDown(Keys.down() ) &&
                !wade.isKeyDown(Keys.left() ) &&
                !wade.isKeyDown(Keys.right() );
    },
};

export default Keys;
