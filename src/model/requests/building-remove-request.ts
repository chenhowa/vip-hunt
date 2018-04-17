import { Request, RequestKind } from './../interfaces/request';




export default class BuildingRemoveRequest implements Request{

    constructor(private id: number) {

    }

    getKind() {
        return RequestKind.BuildingRemove;
    }

    getId() {
        return this.id;
    }
}