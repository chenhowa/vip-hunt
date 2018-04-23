import { RequestKind } from './../../model/interfaces/request';
import { Request } from "../../model/interfaces/request";


export default class ShowBarracksPanelRequest implements Request {


    getKind() {
        return RequestKind.ShowBarracksPanel;
    }
}