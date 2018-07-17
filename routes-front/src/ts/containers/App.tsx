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
                        {/*<Users/> /!*Это пример*!/*/}

                        {/*<Map
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUI" +
                            "GKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"}
                            loadingElement={<div style={{height: `100%`}}/>}
                            containerElement={
                                <div style={{
                                    height: `500px`,
                                    width: `500px`
                                }}/>
                            }
                            mapElement={<div style={{height: `100%`}}/>}
                        />*/}
                    </Col>
                </Row>
            </div>
        );
    }
}


export default App;
