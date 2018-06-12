import * as React from 'react';
import {Button, Col, Row, Table} from "reactstrap";


class FooterTable extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Row className={"justify-content-start"} noGutters={true}>
                    <Col md={"12"} className={"bg-white"}>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>ORDER</th>
                                <th>ATM</th>
                                <th>ADDRESS</th>
                                <th>ARRIVAL TIME</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope={"row"}>No Data Found</th>
                                <td/>
                                <td/>
                                <td/>
                                <td/>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={"12"} className={""}>
                        <Button outline color="secondary">Save</Button>
                        <Button outline color="secondary" disabled={true}>Delete</Button>
                        <Button outline color="secondary" disabled={true}>Move</Button>
                        <Button outline color="secondary" disabled={true}>Show on Map</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default FooterTable;
