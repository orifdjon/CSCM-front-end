import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./containers/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';

const ROOT = document.getElementById("root");
// const store = createStore(null, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <App/>,
    ROOT
);













