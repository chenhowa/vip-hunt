import GamePlayRequestType from "../enums/gameplay-request-type";


export default interface GamePlayRequest {
    getKind(): GamePlayRequestType;
}