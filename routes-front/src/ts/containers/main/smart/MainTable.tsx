import * as React from 'react';
import {Button, Col, Row, Table} from "reactstrap";
import ContainMainTable from './ContainMainTable';
import BtnsMainTable from "./BtnsMainTable";


class MainTable extends React.Component<{}, {}> {
    render() {
        return (
            <Row noGutters={true}>
                <Col md={"12"} className={"bg-white"}>
                    <ContainMainTable/>
                </Col>
                <div className={"w-100"}/>
                <Col md={"12"} className={""}>
                    <BtnsMainTable/>
                </Col>
            </Row>
        );
    }
}

export default MainTable;
