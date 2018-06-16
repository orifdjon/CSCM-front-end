import {combineReducers} from "redux";
import reducer from "./fields";

export default combineReducers({
    field: reducer
})
