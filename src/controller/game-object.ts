import { SceneObject } from "../custom_types/wade";
import { Identifiable } from "../interfaces/identifiable";

class GameObject implements Identifiable {
    
    constructor(private id: number, private representation: SceneObject) {

    }

    getId() {
        return this.id;
    }


}

export { GameObject };