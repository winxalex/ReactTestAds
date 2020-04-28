import { ads } from "../server/ads";

export const AdReducer = {

    initialState: ads,


    /// !DON"T USE ARROW FUNCTIONS
    //Functions are called with "prevState" as "this"
    getAds() {

        return this;
    }

}



