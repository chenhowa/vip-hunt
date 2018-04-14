import GamePlayRequest from "../../interfaces/gameplay-request";
import GamePlayRequestType from "../../enums/gameplay-request-type";
import TargetType from "../../enums/target-type";




export default class AttackRequest implements GamePlayRequest {
    public targetId: number = -1;
    public targetPlayerId: number = -1;
    public gameObjectKind: TargetType = TargetType.Unit;

    
    private constructor () {

    }

    static fromUnit() {
        let request = new AttackRequest();
        request.gameObjectKind = TargetType.Unit;
        return request;
    }

    static fromBuilding() {
        let request = new AttackRequest();
        request.gameObjectKind = TargetType.Building;
        return request;
    }

    getKind() {
        return GamePlayRequestType.Attack;
    }
}