import { Request, RequestKind } from "../interfaces/request";





export default class PlayerRemoveRequest implements Request{

    constructor(private id: number) {
        
    }

    getKind() {
        return RequestKind.PlayerRemove;
    }

    getId() {
        return this.id;
    }
}