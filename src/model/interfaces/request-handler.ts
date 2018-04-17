import { Request, RequestKind } from './request';

export default interface RequestHandler {
    handle(req: Request);
}