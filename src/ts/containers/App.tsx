import * as React from 'react'
import Header from "./header";
import { Col,  Row} from "reactstrap";
import Main from "./main";
import Map from "./Map";

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={"app bg-light"}>
                <Header/>
                <Row>
                    <Col md={"6"}>
                        <Main/>
                    </Col>
                    <Col md={"6"} className={"mt-3"}>
                        <Map
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUI" +
                            "GKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"}
                            loadingElement={<div style={{height: `100%`}}/>}
                            containerElement={
                                <div style={{
                                    height: `500px`,
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
