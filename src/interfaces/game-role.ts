/* Author: Howard Chen
 *
 * The GameRole interface specifies the functions an object must have
 * to provide information about its role in the game at run-time.
 *
 */

import { Role } from "../enums/role";
import { GameActivity } from "./game-activity";

interface GameRole {
    getRole(): Role;
    getActivity(): GameActivity;
}
