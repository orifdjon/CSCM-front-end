import * as React from "react";
import HeaderMain from "./smart/HeaderMain";
import {Container, Row, Col} from "reactstrap";
import MainTable from "./smart/MainTable";
import Map from "./smart/Map"


class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div className={"main"}>
                <HeaderMain/>
                <MainTable/>
                    <Col md={{
                        offset: 7,
                        size: 5
                    }} className={""}>
                        <Map
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
                            loadingElement={<div style={{height: `50%`}}/>}
                            containerElement={

                                <div style={{
                                    height: `1000px`,
                                    width: `50px`
                                }}/>
                            }
                            mapElement={<div style={{height: `50%`}}/>}
                            isMarkerShown={true}
                        />
                    </Col>
            </div>
        );
    }
}

export default Main;
