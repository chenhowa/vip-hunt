import Owner from "./owner";


export default interface Ownable {
    changeOwnershipTo(newOwner: Owner);
}