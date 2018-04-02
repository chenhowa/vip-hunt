

import { RepresentationFactory } from "./representation-factory";
import { UnitType } from "../enums/unit-type";
import { BuildingType } from "../enums/building-type";
import { ResourceType } from "../enums/resource-type";
import { Representation } from "../interfaces/representation";
import { WadeRepresentation } from "../controller/wade-representation";

import { SceneObject } from "../custom_types/wade";
import { SceneObjectFactory } from "../factories/scene-object-factory";

class WadeRepresentationFactory implements RepresentationFactory {
    private sceneObjectFactory: SceneObjectFactory;
    constructor() {
        this.sceneObjectFactory = new SceneObjectFactory();
    }

    makeUnit(type: UnitType): Representation {
        let obj = this.sceneObjectFactory.makeUnit(type);
        return new WadeRepresentation(obj);
    }

    makeBuilding(type: BuildingType): Representation {
        let obj = this.sceneObjectFactory.makeBuilding(type);
        return new WadeRepresentation(obj);
    }

    makeResource(type: ResourceType): Representation {
        let obj = this.sceneObjectFactory.makeResource(type);
        return new WadeRepresentation(obj);
    }



}

export { WadeRepresentationFactory };