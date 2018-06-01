import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./containers/App"
import {createStore} from "redux";
import { Provider } from 'react-redux'

const ROOT = document.getElementById("root");
const store = createStore(null, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    ROOT
);













