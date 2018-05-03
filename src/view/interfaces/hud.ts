import RequestHandler from "../../model/interfaces/request-handler";



export default interface Hud extends RequestHandler {
    display();
}