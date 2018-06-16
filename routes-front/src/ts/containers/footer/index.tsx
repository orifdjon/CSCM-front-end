import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import FooterForm from "./smart/FooterForm";


class Footer extends React.Component<{}, {}> {

    render() {
        return (
            <Row noGutters={true}>
                <Col>
                    <FooterForm/>
                </Col>
            </Row>
        );
    }
}

export default Footer;
