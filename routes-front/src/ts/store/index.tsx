import {applyMiddleware, createStore} from "redux";
import rootReducer from '../reduxElem';
import { CarrierState} from "../reduxElem/header/Carrier";
import {OptTypeState} from "../reduxElem/header/OptType";
import {OptAlgState} from "../reduxElem/header/OptAlg";
import {UsersState} from "../reduxElem/users";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from 'redux-thunk'


export interface IStore{
    carrier: CarrierState;
    optType: OptTypeState;
    optAlg: OptAlgState;
    users: UsersState;
}

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const middlewares = [
    reduxThunk
];


const configuration = (initialState?:  IStore) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    )
};

export default configuration;