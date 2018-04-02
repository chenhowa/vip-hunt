import { ResourceType } from "../enums/resource-type";

interface ResourceTyped {
    getResourceType(): ResourceType;
}

export { ResourceTyped };