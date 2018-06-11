import * as React from "react";
import {Button, ButtonGroup, Label, Row} from 'reactstrap';

const Btns = () => (
    <Row className="btns justify-content-end">
        <Label className="mr-2 mt-2 text-white" for="btns-header">Logged as Default administrator</Label>
        <ButtonGroup size="sm" color="success" id="btns-header">
            <Button className="btn-msg">msg</Button>
            <Button className="btn-query">query</Button>
            <Button className="btn-logout">logout</Button>
        </ButtonGroup>
    </Row>
);


export default Btns;
