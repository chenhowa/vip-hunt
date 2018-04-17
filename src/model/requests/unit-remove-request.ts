import { Request, RequestKind } from './../interfaces/request';





export default class UnitRemoveRequest implements Request {
    constructor(private unitId: number) {

    }

    getKind() {
        return RequestKind.UnitRemove;
    }

    getId() {
        return this.unitId;
    }
}