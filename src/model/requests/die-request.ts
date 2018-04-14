import GamePlayRequest from "../../interfaces/gameplay-request";
import GamePlayRequestType from "../../enums/gameplay-request-type";
import TargetType from "../../enums/target-type";



export default class DieRequest implements GamePlayRequest {

    public id: number = -1;
    public gameObjectKind: TargetType = TargetType.Unit;
    private constructor() {
    }

    static forUnit() {
        let request = new DieRequest();
        request.gameObjectKind = TargetType.Unit;
        return request;
    }

    static forBuilding() {
        let request = new DieRequest();
        request.gameObjectKind = TargetType.Building;
        return request;
    }

    getKind() {
        return GamePlayRequestType.Die;
    }
}