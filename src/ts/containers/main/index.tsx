import * as React from "react";
import {Container} from "reactstrap";
import Footer from "../footer";
import MainTable from "./smart/MainTable";



class Main extends React.Component<{}, {}> {
    render() {
        return (
                <MainTable/>
        );
    }
}

export default Main;
