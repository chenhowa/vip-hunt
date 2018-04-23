import { Request, RequestKind } from './../interfaces/request';



export default class UnitToBuildingAttackRequest implements Request {
    public attackerId = -1;
    public targetId = -1;


    getKind() {
        return RequestKind.UnitToBuildingAttack;
    }
}


