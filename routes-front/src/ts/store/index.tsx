import {createStore} from "redux";
import rootReducer from '../reduxElem';
import { CarrierState} from "../reduxElem/header/Carrier";
import {OptTypeState} from "../reduxElem/header/OptType";
import {OptAlgState} from "../reduxElem/header/OptAlg";

export interface IStore{
    carrier: CarrierState;
    optType: OptTypeState;
    optAlg: OptAlgState;
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