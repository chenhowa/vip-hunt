



export default class IdGenerator {
    private id = 0;

    getId() {
        let currentId = this.id;
        this.id += 1;
        return currentId;
    }
}