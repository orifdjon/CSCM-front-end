import * as React from 'react'
import Header from "./header";
import {Col, Container, Row} from "reactstrap";
import Main from "./main";
import Map from "./main/Map";
import Footer from "./footer";


class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={"app bg-light"}>
                <Container className={"header "} fluid={true}>
                    <Header/>
                </Container>
                <Row>
                    <Col>
                        <Container fluid={true} className={"context-container mt-3"}>
                            <Main/>
                            <Footer/>
                        </Container>
                    </Col>
                    <Col className={"mt-3 map"}>
                        {console.log("hhh")}
                        <Map
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAEVYEk-_D895MMdspChI6p23doCBj_H18"}
                            loadingElement={<div style={{height: `100%`}}/>}
                            containerElement={
                                <div style={{
                                    height: `550px`,
                                    width: `650px`
                                }}/>
                            }
                            mapElement={<div style={{height: `100%`}}/>}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}


export default App;
