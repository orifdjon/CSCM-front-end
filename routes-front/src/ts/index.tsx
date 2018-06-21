import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./containers/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';
import configuration from "./store";
import {Provider} from "react-redux";

const ROOT = document.getElementById("root");

const store = configuration();


ReactDOM.render(
    <Provider store={store}>
                 <App/>
            </Provider>
    ,
    ROOT
);













