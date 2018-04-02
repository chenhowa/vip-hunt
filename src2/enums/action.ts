
/*  Author: Howard Chen
 *
 *  The Action enum helps the game determine at run-time what type of Action 
 *  an event or other entity is currently doing.
 *
 *
 *
 */

enum Action {
    Idle,
    Attacking,
    MovingToNewLocation,
    Patrolling,
}


export { Action };
