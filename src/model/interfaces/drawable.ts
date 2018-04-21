import Representation from "../../view/interfaces/representation";





export default interface Drawable {
    render();
    rep: Representation;
}