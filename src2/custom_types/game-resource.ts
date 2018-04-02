
import { Gatherable } from "../interfaces/gatherable";
import { Identifiable } from "../interfaces/identifiable";
import { ResourceTyped } from "../interfaces/resource-typed";

type GameResource = Gatherable & Identifiable & ResourceTyped;

export { GameResource };