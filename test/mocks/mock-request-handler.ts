import { Request } from './../../src/model/interfaces/request';
import RequestHandler from "../../src/model/interfaces/request-handler";



export default class MockRequestHandler implements RequestHandler {
    public req: Request;

    handle(req: Request) {
        this.req = req;
    }
}