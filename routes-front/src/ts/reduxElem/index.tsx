import {combineReducers} from "redux";
import carrierReducer from "./Carrier";
import dateReducer from "./DateTime";

export default combineReducers({
    carrier: carrierReducer,
    date: dateReducer
})
