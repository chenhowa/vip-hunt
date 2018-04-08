import GamePlayRequest from "../interfaces/gameplay-request";
import GamePlayRequestType from "../enums/gameplay-request-type";




export default class AttackRequest implements GamePlayRequest {
    public targetId: number;
    public targetPlayerId: number;
    public gameObjectKind: string;
    
    constructor () {

    }

    static fromUnit() {
        let request = new AttackRequest();
        request.gameObjectKind = "unit";
        return request;
    }

    static fromBuilding() {
        let request = new AttackRequest();
        request.gameObjectKind = "building";
        return request;
    }

    getKind() {
        return GamePlayRequestType.Attack;
    }


}