/* image-map.ts
 *
 *
 * The ImageMap module contains an enum for the filepaths of the various
 * image files that will be used in the game.
 */

// The root directory is the html folder. But because the Javascript is in the  /js folder, we must prepend ../js/ to all the image URLs.
const ImageMap = {
    fog: '../js/../public/fog/darkness_150.png',
    scroll: '../js/../public/sprites/hud/scroll.png',
    buildingIcon: '../js/../public/sprites/hud/building.png',

    barracks_1: '../js/../public/sprites/buildings/barracks_1.png',
    stables_1: '../js/../public/sprites/buildings/stables_1.png',
    towers_1: '../js/../public/sprites/buildings/towers_1.png',
    town_halls_1: '../js/../public/sprites/buildings/town_halls_1.png',
    swordsman_1: '../js/../public/tilesets/characters/swordsman/swordsman_1_Idle_iso_se.png',
    archer_1: '../js/../public/sprites/units/results_archer_2/archer_icon.png',
    gatherer_1: '../js/../public/sprites/units/results_barbarian/gatherer_icon.png',
    spear_calvary_1: '../js/../public/sprites/units/results_warrior_3/spear_calvary_icon.png',
    archer_calvary_1: '../js/../public/sprites/units/results_archer_1/archer_calvary_icon.png',
    drummer_boy_1: '../js/../public/sprites/units/results_warrior_2/drummer_icon.png',
    vip_1: '../js/../public/sprites/units/results_knight/vip_icon.png',
    stone: '../js/../public/sprites/resources/stone.png',
    food: '../js/../public/sprites/resources/food.png',
    wood: '../js/../public/sprites/resources/wood.png',

    stoneIcon: '../js/../public/sprites/resources/stone.png',
    woodIcon: '../js/../public/sprites/resources/wood.png',
    foodIcon: '../js/../public/sprites/resources/food.png',

    swordsman_N_idle: '../js/../public/sprites/units/results_warrior_1/idleN.png',
    swordsman_S_idle: '../js/../public/sprites/units/results_warrior_1/idleS.png',
    swordsman_E_idle: '../js/../public/sprites/units/results_warrior_1/idleE.png',
    swordsman_W_idle: '../js/../public/sprites/units/results_warrior_1/idleW.png',
    swordsman_NE_idle: '../js/../public/sprites/units/results_warrior_1/idleNE.png',
    swordsman_NW_idle: '../js/../public/sprites/units/results_warrior_1/idleNW.png',
    swordsman_SE_idle: '../js/../public/sprites/units/results_warrior_1/idleSE.png',
    swordsman_SW_idle: '../js/../public/sprites/units/results_warrior_1/idleSW.png',
    swordsman_N_walk: '../js/../public/sprites/units/results_warrior_1/runN.png',
    swordsman_S_walk: '../js/../public/sprites/units/results_warrior_1/runS.png',
    swordsman_E_walk: '../js/../public/sprites/units/results_warrior_1/runE.png',
    swordsman_W_walk: '../js/../public/sprites/units/results_warrior_1/runW.png',
    swordsman_NE_walk: '../js/../public/sprites/units/results_warrior_1/runNE.png',
    swordsman_NW_walk: '../js/../public/sprites/units/results_warrior_1/runNW.png',
    swordsman_SE_walk: '../js/../public/sprites/units/results_warrior_1/runSE.png',
    swordsman_SW_walk: '../js/../public/sprites/units/results_warrior_1/runSW.png',
    swordsman_N_attack: '../js/../public/sprites/units/results_warrior_1/attack_01N.png',
    swordsman_S_attack: '../js/../public/sprites/units/results_warrior_1/attack_01S.png',
    swordsman_E_attack: '../js/../public/sprites/units/results_warrior_1/attack_01E.png',
    swordsman_W_attack: '../js/../public/sprites/units/results_warrior_1/attack_01W.png',
    swordsman_NE_attack: '../js/../public/sprites/units/results_warrior_1/attack_01NE.png',
    swordsman_NW_attack: '../js/../public/sprites/units/results_warrior_1/attack_01NW.png',
    swordsman_SE_attack: '../js/../public/sprites/units/results_warrior_1/attack_01SE.png',
    swordsman_SW_attack: '../js/../public/sprites/units/results_warrior_1/attack_01SW.png',
    swordsman_N_death: '../js/../public/sprites/units/results_warrior_1/deathN.png',
    swordsman_S_death: '../js/../public/sprites/units/results_warrior_1/deathS.png',
    swordsman_E_death: '../js/../public/sprites/units/results_warrior_1/deathE.png',
    swordsman_W_death: '../js/../public/sprites/units/results_warrior_1/deathW.png',
    swordsman_NE_death: '../js/../public/sprites/units/results_warrior_1/deathNE.png',
    swordsman_NW_death: '../js/../public/sprites/units/results_warrior_1/deathNW.png',
    swordsman_SE_death: '../js/../public/sprites/units/results_warrior_1/deathSE.png',
    swordsman_SW_death: '../js/../public/sprites/units/results_warrior_1/deathSW.png',


    archer_N_idle: '../js/../public/sprites/units/results_archer_2/idleN.png',
    archer_S_idle: '../js/../public/sprites/units/results_archer_2/idleS.png',
    archer_E_idle: '../js/../public/sprites/units/results_archer_2/idleE.png',
    archer_W_idle: '../js/../public/sprites/units/results_archer_2/idleW.png',
    archer_NE_idle: '../js/../public/sprites/units/results_archer_2/idleNE.png',
    archer_NW_idle: '../js/../public/sprites/units/results_archer_2/idleNW.png',
    archer_SE_idle: '../js/../public/sprites/units/results_archer_2/idleSE.png',
    archer_SW_idle: '../js/../public/sprites/units/results_archer_2/idleSW.png',
    archer_N_walk: '../js/../public/sprites/units/results_archer_2/runN.png',
    archer_S_walk: '../js/../public/sprites/units/results_archer_2/runS.png',
    archer_E_walk: '../js/../public/sprites/units/results_archer_2/runE.png',
    archer_W_walk: '../js/../public/sprites/units/results_archer_2/runW.png',
    archer_NE_walk: '../js/../public/sprites/units/results_archer_2/runNE.png',
    archer_NW_walk: '../js/../public/sprites/units/results_archer_2/runNW.png',
    archer_SE_walk: '../js/../public/sprites/units/results_archer_2/runSE.png',
    archer_SW_walk: '../js/../public/sprites/units/results_archer_2/runSW.png',
    archer_N_attack: '../js/../public/sprites/units/results_archer_2/attack_03N.png',
    archer_S_attack: '../js/../public/sprites/units/results_archer_2/attack_03S.png',
    archer_E_attack: '../js/../public/sprites/units/results_archer_2/attack_03E.png',
    archer_W_attack: '../js/../public/sprites/units/results_archer_2/attack_03W.png',
    archer_NE_attack: '../js/../public/sprites/units/results_archer_2/attack_03NE.png',
    archer_NW_attack: '../js/../public/sprites/units/results_archer_2/attack_03NW.png',
    archer_SE_attack: '../js/../public/sprites/units/results_archer_2/attack_03SE.png',
    archer_SW_attack: '../js/../public/sprites/units/results_archer_2/attack_03SW.png',
    archer_N_death: '../js/../public/sprites/units/results_archer_2/deathN.png',
    archer_S_death: '../js/../public/sprites/units/results_archer_2/deathS.png',
    archer_E_death: '../js/../public/sprites/units/results_archer_2/deathE.png',
    archer_W_death: '../js/../public/sprites/units/results_archer_2/deathW.png',
    archer_NE_death: '../js/../public/sprites/units/results_archer_2/deathNE.png',
    archer_NW_death: '../js/../public/sprites/units/results_archer_2/deathNW.png',
    archer_SE_death: '../js/../public/sprites/units/results_archer_2/deathSE.png',
    archer_SW_death: '../js/../public/sprites/units/results_archer_2/deathSW.png',


    archerCalvary_N_idle: '../js/../public/sprites/units/results_archer_1/idleN.png',
    archerCalvary_S_idle: '../js/../public/sprites/units/results_archer_1/idleS.png',
    archerCalvary_E_idle: '../js/../public/sprites/units/results_archer_1/idleE.png',
    archerCalvary_W_idle: '../js/../public/sprites/units/results_archer_1/idleW.png',
    archerCalvary_NE_idle: '../js/../public/sprites/units/results_archer_1/idleNE.png',
    archerCalvary_NW_idle: '../js/../public/sprites/units/results_archer_1/idleNW.png',
    archerCalvary_SE_idle: '../js/../public/sprites/units/results_archer_1/idleSE.png',
    archerCalvary_SW_idle: '../js/../public/sprites/units/results_archer_1/idleSW.png',
    archerCalvary_N_walk: '../js/../public/sprites/units/results_archer_1/runN.png',
    archerCalvary_S_walk: '../js/../public/sprites/units/results_archer_1/runS.png',
    archerCalvary_E_walk: '../js/../public/sprites/units/results_archer_1/runE.png',
    archerCalvary_W_walk: '../js/../public/sprites/units/results_archer_1/runW.png',
    archerCalvary_NE_walk: '../js/../public/sprites/units/results_archer_1/runNE.png',
    archerCalvary_NW_walk: '../js/../public/sprites/units/results_archer_1/runNW.png',
    archerCalvary_SE_walk: '../js/../public/sprites/units/results_archer_1/runSE.png',
    archerCalvary_SW_walk: '../js/../public/sprites/units/results_archer_1/runSW.png',
    archerCalvary_N_attack: '../js/../public/sprites/units/results_archer_1/attack_04N.png',
    archerCalvary_S_attack: '../js/../public/sprites/units/results_archer_1/attack_04S.png',
    archerCalvary_E_attack: '../js/../public/sprites/units/results_archer_1/attack_04E.png',
    archerCalvary_W_attack: '../js/../public/sprites/units/results_archer_1/attack_04W.png',
    archerCalvary_NE_attack: '../js/../public/sprites/units/results_archer_1/attack_04NE.png',
    archerCalvary_NW_attack: '../js/../public/sprites/units/results_archer_1/attack_04NW.png',
    archerCalvary_SE_attack: '../js/../public/sprites/units/results_archer_1/attack_04SE.png',
    archerCalvary_SW_attack: '../js/../public/sprites/units/results_archer_1/attack_04SW.png',
    archerCalvary_N_death: '../js/../public/sprites/units/results_archer_1/deathN.png',
    archerCalvary_S_death: '../js/../public/sprites/units/results_archer_1/deathS.png',
    archerCalvary_E_death: '../js/../public/sprites/units/results_archer_1/deathE.png',
    archerCalvary_W_death: '../js/../public/sprites/units/results_archer_1/deathW.png',
    archerCalvary_NE_death: '../js/../public/sprites/units/results_archer_1/deathNE.png',
    archerCalvary_NW_death: '../js/../public/sprites/units/results_archer_1/deathNW.png',
    archerCalvary_SE_death: '../js/../public/sprites/units/results_archer_1/deathSE.png',
    archerCalvary_SW_death: '../js/../public/sprites/units/results_archer_1/deathSW.png',


    spearCalvary_N_idle: '../js/../public/sprites/units/results_warrior_3/idleN.png',
    spearCalvary_S_idle: '../js/../public/sprites/units/results_warrior_3/idleS.png',
    spearCalvary_E_idle: '../js/../public/sprites/units/results_warrior_3/idleE.png',
    spearCalvary_W_idle: '../js/../public/sprites/units/results_warrior_3/idleW.png',
    spearCalvary_NE_idle: '../js/../public/sprites/units/results_warrior_3/idleNE.png',
    spearCalvary_NW_idle: '../js/../public/sprites/units/results_warrior_3/idleNW.png',
    spearCalvary_SE_idle: '../js/../public/sprites/units/results_warrior_3/idleSE.png',
    spearCalvary_SW_idle: '../js/../public/sprites/units/results_warrior_3/idleSW.png',
    spearCalvary_N_walk: '../js/../public/sprites/units/results_warrior_3/runN.png',
    spearCalvary_S_walk: '../js/../public/sprites/units/results_warrior_3/runS.png',
    spearCalvary_E_walk: '../js/../public/sprites/units/results_warrior_3/runE.png',
    spearCalvary_W_walk: '../js/../public/sprites/units/results_warrior_3/runW.png',
    spearCalvary_NE_walk: '../js/../public/sprites/units/results_warrior_3/runNE.png',
    spearCalvary_NW_walk: '../js/../public/sprites/units/results_warrior_3/runNW.png',
    spearCalvary_SE_walk: '../js/../public/sprites/units/results_warrior_3/runSE.png',
    spearCalvary_SW_walk: '../js/../public/sprites/units/results_warrior_3/runSW.png',
    spearCalvary_N_attack: '../js/../public/sprites/units/results_warrior_3/attack_02N.png',
    spearCalvary_S_attack: '../js/../public/sprites/units/results_warrior_3/attack_02S.png',
    spearCalvary_E_attack: '../js/../public/sprites/units/results_warrior_3/attack_02E.png',
    spearCalvary_W_attack: '../js/../public/sprites/units/results_warrior_3/attack_02W.png',
    spearCalvary_NE_attack: '../js/../public/sprites/units/results_warrior_3/attack_02NE.png',
    spearCalvary_NW_attack: '../js/../public/sprites/units/results_warrior_3/attack_02NW.png',
    spearCalvary_SE_attack: '../js/../public/sprites/units/results_warrior_3/attack_02SE.png',
    spearCalvary_SW_attack: '../js/../public/sprites/units/results_warrior_3/attack_02SW.png',
    spearCalvary_N_death: '../js/../public/sprites/units/results_warrior_3/deathN.png',
    spearCalvary_S_death: '../js/../public/sprites/units/results_warrior_3/deathS.png',
    spearCalvary_E_death: '../js/../public/sprites/units/results_warrior_3/deathE.png',
    spearCalvary_W_death: '../js/../public/sprites/units/results_warrior_3/deathW.png',
    spearCalvary_NE_death: '../js/../public/sprites/units/results_warrior_3/deathNE.png',
    spearCalvary_NW_death: '../js/../public/sprites/units/results_warrior_3/deathNW.png',
    spearCalvary_SE_death: '../js/../public/sprites/units/results_warrior_3/deathSE.png',
    spearCalvary_SW_death: '../js/../public/sprites/units/results_warrior_3/deathSW.png',


    gatherer_N_idle: '../js/../public/sprites/units/results_barbarian/idleN.png',
    gatherer_S_idle: '../js/../public/sprites/units/results_barbarian/idleS.png',
    gatherer_E_idle: '../js/../public/sprites/units/results_barbarian/idleE.png',
    gatherer_W_idle: '../js/../public/sprites/units/results_barbarian/idleW.png',
    gatherer_NE_idle: '../js/../public/sprites/units/results_barbarian/idleNE.png',
    gatherer_NW_idle: '../js/../public/sprites/units/results_barbarian/idleNW.png',
    gatherer_SE_idle: '../js/../public/sprites/units/results_barbarian/idleSE.png',
    gatherer_SW_idle: '../js/../public/sprites/units/results_barbarian/idleSW.png',
    gatherer_N_walk: '../js/../public/sprites/units/results_barbarian/walkN.png',
    gatherer_S_walk: '../js/../public/sprites/units/results_barbarian/walkS.png',
    gatherer_E_walk: '../js/../public/sprites/units/results_barbarian/walkE.png',
    gatherer_W_walk: '../js/../public/sprites/units/results_barbarian/walkW.png',
    gatherer_NE_walk: '../js/../public/sprites/units/results_barbarian/walkNE.png',
    gatherer_NW_walk: '../js/../public/sprites/units/results_barbarian/walkNW.png',
    gatherer_SE_walk: '../js/../public/sprites/units/results_barbarian/walkSE.png',
    gatherer_SW_walk: '../js/../public/sprites/units/results_barbarian/walkSW.png',
    gatherer_N_attack: '../js/../public/sprites/units/results_barbarian/attackN.png',
    gatherer_S_attack: '../js/../public/sprites/units/results_barbarian/attackS.png',
    gatherer_E_attack: '../js/../public/sprites/units/results_barbarian/attackE.png',
    gatherer_W_attack: '../js/../public/sprites/units/results_barbarian/attackW.png',
    gatherer_NE_attack: '../js/../public/sprites/units/results_barbarian/attackNE.png',
    gatherer_NW_attack: '../js/../public/sprites/units/results_barbarian/attackNW.png',
    gatherer_SE_attack: '../js/../public/sprites/units/results_barbarian/attackSE.png',
    gatherer_SW_attack: '../js/../public/sprites/units/results_barbarian/attackSW.png',
    gatherer_N_death: '../js/../public/sprites/units/results_barbarian/deathN.png',
    gatherer_S_death: '../js/../public/sprites/units/results_barbarian/deathS.png',
    gatherer_E_death: '../js/../public/sprites/units/results_barbarian/deathE.png',
    gatherer_W_death: '../js/../public/sprites/units/results_barbarian/deathW.png',
    gatherer_NE_death: '../js/../public/sprites/units/results_barbarian/deathNE.png',
    gatherer_NW_death: '../js/../public/sprites/units/results_barbarian/deathNW.png',
    gatherer_SE_death: '../js/../public/sprites/units/results_barbarian/deathSE.png',
    gatherer_SW_death: '../js/../public/sprites/units/results_barbarian/deathSW.png',

    drummerBoy_N_idle: '../js/../public/sprites/units/results_warrior_2/idleN.png',
    drummerBoy_S_idle: '../js/../public/sprites/units/results_warrior_2/idleS.png',
    drummerBoy_E_idle: '../js/../public/sprites/units/results_warrior_2/idleE.png',
    drummerBoy_W_idle: '../js/../public/sprites/units/results_warrior_2/idleW.png',
    drummerBoy_NE_idle: '../js/../public/sprites/units/results_warrior_2/idleNE.png',
    drummerBoy_NW_idle: '../js/../public/sprites/units/results_warrior_2/idleNW.png',
    drummerBoy_SE_idle: '../js/../public/sprites/units/results_warrior_2/idleSE.png',
    drummerBoy_SW_idle: '../js/../public/sprites/units/results_warrior_2/idleSW.png',
    drummerBoy_N_walk: '../js/../public/sprites/units/results_warrior_2/runN.png',
    drummerBoy_S_walk: '../js/../public/sprites/units/results_warrior_2/runS.png',
    drummerBoy_E_walk: '../js/../public/sprites/units/results_warrior_2/runE.png',
    drummerBoy_W_walk: '../js/../public/sprites/units/results_warrior_2/runW.png',
    drummerBoy_NE_walk: '../js/../public/sprites/units/results_warrior_2/runNE.png',
    drummerBoy_NW_walk: '../js/../public/sprites/units/results_warrior_2/runNW.png',
    drummerBoy_SE_walk: '../js/../public/sprites/units/results_warrior_2/runSE.png',
    drummerBoy_SW_walk: '../js/../public/sprites/units/results_warrior_2/runSW.png',
    drummerBoy_N_attack: '../js/../public/sprites/units/results_warrior_2/attack_02N.png',
    drummerBoy_S_attack: '../js/../public/sprites/units/results_warrior_2/attack_02S.png',
    drummerBoy_E_attack: '../js/../public/sprites/units/results_warrior_2/attack_02E.png',
    drummerBoy_W_attack: '../js/../public/sprites/units/results_warrior_2/attack_02W.png',
    drummerBoy_NE_attack: '../js/../public/sprites/units/results_warrior_2/attack_02NE.png',
    drummerBoy_NW_attack: '../js/../public/sprites/units/results_warrior_2/attack_02NW.png',
    drummerBoy_SE_attack: '../js/../public/sprites/units/results_warrior_2/attack_02SE.png',
    drummerBoy_SW_attack: '../js/../public/sprites/units/results_warrior_2/attack_02SW.png',
    drummerBoy_N_death: '../js/../public/sprites/units/results_warrior_2/deathN.png',
    drummerBoy_S_death: '../js/../public/sprites/units/results_warrior_2/deathS.png',
    drummerBoy_E_death: '../js/../public/sprites/units/results_warrior_2/deathE.png',
    drummerBoy_W_death: '../js/../public/sprites/units/results_warrior_2/deathW.png',
    drummerBoy_NE_death: '../js/../public/sprites/units/results_warrior_2/deathNE.png',
    drummerBoy_NW_death: '../js/../public/sprites/units/results_warrior_2/deathNW.png',
    drummerBoy_SE_death: '../js/../public/sprites/units/results_warrior_2/deathSE.png',
    drummerBoy_SW_death: '../js/../public/sprites/units/results_warrior_2/deathSW.png',



    vip_N_idle: '../js/../public/sprites/units/results_knight/idleN.png',
    vip_S_idle: '../js/../public/sprites/units/results_knight/idleS.png',
    vip_E_idle: '../js/../public/sprites/units/results_knight/idleE.png',
    vip_W_idle: '../js/../public/sprites/units/results_knight/idleW.png',
    vip_NE_idle: '../js/../public/sprites/units/results_knight/idleNE.png',
    vip_NW_idle: '../js/../public/sprites/units/results_knight/idleNW.png',
    vip_SE_idle: '../js/../public/sprites/units/results_knight/idleSE.png',
    vip_SW_idle: '../js/../public/sprites/units/results_knight/idleSW.png',
    vip_N_walk: '../js/../public/sprites/units/results_knight/walkN.png',
    vip_S_walk: '../js/../public/sprites/units/results_knight/walkS.png',
    vip_E_walk: '../js/../public/sprites/units/results_knight/walkE.png',
    vip_W_walk: '../js/../public/sprites/units/results_knight/walkW.png',
    vip_NE_walk: '../js/../public/sprites/units/results_knight/walkNE.png',
    vip_NW_walk: '../js/../public/sprites/units/results_knight/walkNW.png',
    vip_SE_walk: '../js/../public/sprites/units/results_knight/walkSE.png',
    vip_SW_walk: '../js/../public/sprites/units/results_knight/walkSW.png',
    vip_N_attack: '../js/../public/sprites/units/results_knight/attackN.png',
    vip_S_attack: '../js/../public/sprites/units/results_knight/attackS.png',
    vip_E_attack: '../js/../public/sprites/units/results_knight/attackE.png',
    vip_W_attack: '../js/../public/sprites/units/results_knight/attackW.png',
    vip_NE_attack: '../js/../public/sprites/units/results_knight/attackNE.png',
    vip_NW_attack: '../js/../public/sprites/units/results_knight/attackNW.png',
    vip_SE_attack: '../js/../public/sprites/units/results_knight/attackSE.png',
    vip_SW_attack: '../js/../public/sprites/units/results_knight/attackSW.png',
    vip_N_death: '../js/../public/sprites/units/results_knight/deathN.png',
    vip_S_death: '../js/../public/sprites/units/results_knight/deathS.png',
    vip_E_death: '../js/../public/sprites/units/results_knight/deathE.png',
    vip_W_death: '../js/../public/sprites/units/results_knight/deathW.png',
    vip_NE_death: '../js/../public/sprites/units/results_knight/deathNE.png',
    vip_NW_death: '../js/../public/sprites/units/results_knight/deathNW.png',
    vip_SE_death: '../js/../public/sprites/units/results_knight/deathSE.png',
    vip_SW_death: '../js/../public/sprites/units/results_knight/deathSW.png',

    enemy_unit_marker: '../js/../public/sprites/units/enemy_marker.png',
};

export default ImageMap;
