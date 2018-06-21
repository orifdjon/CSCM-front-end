import {createStore} from "redux";
import rootReducer from '../reduxElem';
import { CarrierState} from "../reduxElem/Carrier";

export interface IStore{
    carrier: CarrierState
}

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const configuration = (initialState?:  IStore) => {
    return createStore(
        rootReducer,
        initialState,
        reduxDevTool
    )
};

export default configuration;