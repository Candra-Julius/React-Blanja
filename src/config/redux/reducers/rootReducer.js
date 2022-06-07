import { combineReducers } from "redux";
import sellingReducer from "./sellingReducer";
import userReducer from "./userReducer";
import homeReducer from "./homeReducer"
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    user: userReducer,
    selling: sellingReducer,
    category: homeReducer.homeCategoryReducer,
    product: homeReducer.homeProductReducer,
    editProfile: profileReducer
})

export default rootReducer