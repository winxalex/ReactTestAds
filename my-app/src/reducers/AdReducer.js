import { ads } from "../server/ads";

export const AdReducer = {

    initialState: ads,

    getAds: () => {
        return this;
    }

}



