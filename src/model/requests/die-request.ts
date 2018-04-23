import { RequestKind } from './../interfaces/request';
import { Request } from "../interfaces/request";






export default class DieRequest implements Request {


    getKind() {
        return RequestKind.Die;
    }
}