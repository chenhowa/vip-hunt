import Coordinates2D from "../../model/types/coodinates-2d";


export default interface Representation {



    travelTo(location: Coordinates2D);
    chase(target: Representation);
    
}