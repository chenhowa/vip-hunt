import { Request, RequestKind } from "../../src/model/interfaces/request";




export default class MockRequest implements Request {


    getKind() {
        return RequestKind.Unknown;
    }
}