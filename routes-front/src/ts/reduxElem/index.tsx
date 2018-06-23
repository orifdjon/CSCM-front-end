import {combineReducers} from "redux";
import carrierReducer from "./header/Carrier";
import dateReducer from "./header/DateTime";
import optTypeReducer from "./header/OptType";
import optAlgReducer from "./header/OptAlg";
import axiosReducer from "./users";

export default combineReducers({
    carrier: carrierReducer,
    date: dateReducer,
    optType: optTypeReducer,
    optAlg: optAlgReducer,
    users: axiosReducer

})
