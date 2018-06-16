import {createStore} from "redux";
import reduxElem from '../reduxElem';
import { FieldState} from "../reduxElem/fields";

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configuration = (initial?:  FieldState) => {
    return createStore(
        reduxElem,
        reduxDevTool
    )
};

export default configuration;