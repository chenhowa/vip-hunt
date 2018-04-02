import { UnitType } from "../enums/unit-type";
import { BuildingType } from "../enums/building-type";
import { ResourceType } from "../enums/resource-type";
import { SceneObject } from "../custom_types/wade";

class SceneObjectFactory {
    makeUnit( type: UnitType ) : SceneObject {
        return new SceneObject();
    }

    makeBuilding(type: BuildingType) : SceneObject {
        return new SceneObject();
    }

    makeResource(type: ResourceType) : SceneObject {
        return new SceneObject();
    }
}

export { SceneObjectFactory };