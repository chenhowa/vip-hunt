import { Request, RequestKind } from './../interfaces/request';



export default class ResourceRemoveRequest implements Request {

    constructor(private id: number) {

    }

    getKind() {
        return RequestKind.ResourceRemove;
    }

    getId() {
        return this.id;
    }

}