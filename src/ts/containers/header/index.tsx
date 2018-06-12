import * as React from "react";
import HeaderBtns from "./silly/Btns"
import {Col, Container, Row} from "reactstrap";
import HeaderMain from "./smart/HeaderMain";

class Header extends React.Component<{}, {}> {
    render() { //TODO implement CurrentTime
        return (
            <Container className={"header "} fluid={true}>
                <Row>
                    <Col>
                        <HeaderBtns/>
                    </Col>
                    <div className={"w-100"}/>
                    <Col>
                        <HeaderMain/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;
