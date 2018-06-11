import * as React from 'react';
import {Button, Col, FormGroup, Label} from "reactstrap";
import OptAlg from "../silly/OptAlg";
import CarrierInput from "../silly/Carrier";
import OptTypeInput from "../silly/OptType";

const HeaderMain = ()  => (
    <FormGroup row className={"ml-1 mt-2 no-gutters"}>
        <Col md={{size: 0}}>
            <Label for={"carrier-input"} className={"mt-2 mr-1"}>Carrier</Label>
        </Col>
        <CarrierInput/>
        <Col md={{offset: 2}}>
            <Label for={"opt-type-input"} className={"mt-2 mr-1"}>Optimization Type</Label>
        </Col>
        <OptTypeInput/>
        <Col md={{offset: 0}}>
            <Label for={"opt-type-input"} className={"mt-2 mr-1 ml-2"}>Optimization algorithm</Label>
        </Col>
        <OptAlg/>
        <Col md={"0"} className={"ml-3"}>
            <Button color="primary">Search</Button>
        </Col>
        <Col md={"0"} className={"ml-3"}>
            <Button color="white">Calculate</Button>
        </Col>
    </FormGroup>
);

export default HeaderMain;
