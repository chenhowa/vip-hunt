import RequestHandler from "../../model/interfaces/request-handler";



export default interface Hud {
    showBarracksPanel();
    showTowerPanel();
    showTownHallPanel();
    showStablesPanel();

    showSelectedUnit();
    showSelectedBuilding();
    showSelectedResource();

    showBackground();

    showMainPanel();

    showPlayerResources();
}