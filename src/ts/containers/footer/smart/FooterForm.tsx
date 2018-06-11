import * as React from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import ClassNames from 'classnames';
import FooterTable from "./FooterTable";

class FooterForm extends React.Component {
    render() {
        return (
            <Row className={"mt-5"}>
                <Col md={"6"} className={""}>
                    <Nav tabs className={""}>
                        <NavItem>
                            <NavLink
                                className={ClassNames({active: true})}
                            >
                                Details
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={ClassNames({active: false})}
                            >
                                Comments
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={1}>
                        <TabPane tabId={1}>
                            <Row>
                                <Col md={"12"}>
                                    <FooterTable/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId={2}>
                            <Row>
                                <Col md={6}>
                                    <h6>Tab 2</h6>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        );
    }
}

export default FooterForm;
