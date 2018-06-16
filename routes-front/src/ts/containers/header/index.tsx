import * as React from "react";
import HeaderBtns from "./silly/Btns"
import {Col, Container, Row} from "reactstrap";
import HeaderMain from "./smart/HeaderMain";

class Header extends React.Component<{}, {}> {
    render() { //TODO implement CurrentTime
        return (
            <Row>
                <Col>
                    <HeaderBtns/>
                </Col>
                <div className={"w-100"}/>
                <Col>
                    <HeaderMain/>
                </Col>
            </Row>
        );
    }
}

export default Header;
