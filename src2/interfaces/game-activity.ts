/* Author: Howard Chen
 *
 * A object that implements the GameActivity interface can provide information
 * about a Game Activity.
 *
 */

import { Action } from "../enums/action";


interface GameActivity {
    getTarget(): object | object[] | number | null;
    getAction(): Action;
}

export { GameActivity };
