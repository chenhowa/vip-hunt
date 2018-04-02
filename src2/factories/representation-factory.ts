import { UnitType } from "../enums/unit-type";
import { BuildingType } from "../enums/building-type";
import { ResourceType } from "../enums/resource-type";
import { Representation } from "../interfaces/representation";

interface RepresentationFactory {
    makeUnit( type: UnitType ) : Representation;
    makeBuilding( type: BuildingType ) : Representation;
    makeResource( type: ResourceType ) : Representation;
}

export { RepresentationFactory };