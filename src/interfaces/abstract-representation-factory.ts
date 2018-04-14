import UnitType from "../enums/unit-type";
import BuildingType from "../enums/building-type";
import AbstractRepresentation from "./abstract-representation";
import ResourceType from "../enums/resource-type";
import GamePlayHandler from "./gameplay-handler";


export default interface AbstractRepresentationFactory {
    make(type: UnitType | BuildingType | ResourceType, owner: GamePlayHandler): AbstractRepresentation;
}