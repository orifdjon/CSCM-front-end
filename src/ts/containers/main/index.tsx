import * as React from "react";
import {Container, Row, Col, Table, Button} from "reactstrap";
import Footer from "../footer";
import MainTable from "./smart/MainTable";



class Main extends React.Component<{}, {}> {
    render() {
        return (
            <Container fluid={true} className={"context-container mt-3"}>
                <MainTable/>
                <Footer/>
            </Container>
        );
    }
}

export default Main;
