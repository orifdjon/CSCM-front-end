import * as React from 'react';
import {Button, Col, Row, Table} from "reactstrap";


class TableMain extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Row className={"justify-content-start mt-5"} noGutters={true}>
                    <Col md={"6"} className={"bg-white"}>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>ROUTE NUMBER</th>
                                <th>DATE</th>
                                <th>NUMBER OF POINTS</th>
                                <th>STATUS</th>
                                <th>LENGTH</th>
                                <th>TIME</th>
                                <th>COST</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope={"row"}>No Data Found</th>
                                <td/>
                                <td/>
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
                    <Col md={"4"} className={""}>
                        <Button outline color="secondary">Add</Button>
                        <Button outline color="secondary" disabled={true}>Delete</Button>
                        <Button outline color="secondary" disabled={true}>Approve</Button>
                        <Button outline color="secondary" disabled={true}>Export</Button>
                        <Button outline color="secondary" disabled={true}>Recalculate</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default TableMain;
