import { Request, RequestKind } from "../interfaces/request";




export default class UnitToUnitAttackRequest implements Request {
    public targetId: number = -1;
    public attackerId: number = -1;

    getKind() {
        return RequestKind.UnitToUnitAttack;
    }
}