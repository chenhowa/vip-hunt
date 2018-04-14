import ResourceType from "../../enums/resource-type";

class ResourceStruct {
    id: number = -1;
    amount: number = 0;
    type: ResourceType = ResourceType.Untyped;    

}

export default ResourceStruct;