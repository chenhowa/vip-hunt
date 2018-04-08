import GamePlayRequest from "../interfaces/gameplay-request";
import GamePlayRequestType from "../enums/gameplay-request-type";



export default class DieRequest implements GamePlayRequest {

    private id: number;
    private gameObjectKind;
    private constructor(id: number) {
        this.id = id;
    }

    static forUnit(id: number) {
        let request = new DieRequest(id);
        request.gameObjectKind = "unit";
        return request;
    }

    static forBuilding(id: number) {
        let request = new DieRequest(id);
        request.gameObjectKind = "building";
        return request;
    }

    getKind() {
        return GamePlayRequestType.Die;
    }

    getId() {
        return this.id;
    }

    getGameObjectKind() {
        return this.gameObjectKind;
    }
}