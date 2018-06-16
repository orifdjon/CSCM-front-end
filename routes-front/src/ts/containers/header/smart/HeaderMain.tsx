import * as React from 'react';
import {Button, Col, FormGroup, InputGroup, Label} from "reactstrap";
import OptAlg from "../silly/OptAlg";
import CarrierInput from "../silly/Carrier";
import OptTypeInput from "../silly/OptType";
import * as DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css"

const HeaderMain = () => (
    <FormGroup row className={"ml-1 mt-2 no-gutters"}>
        <Col md={{size: 0}}>
            <InputGroup>
                <Label for={"carrier-input"} className={"mt-2 mr-1"}>Carrier</Label>
                <CarrierInput/>
            </InputGroup>
        </Col>
        <Col className={"ml-3"} md={"1"}>
            <DateTime
                dateFormat={"DD-MM-YYYY"}
                timeFormat={false}
                inputProps={{placeholder: 'select date', disabled: false}}
                closeOnSelect={true}
            />
        </Col>
        <Col className={"ml-3"} md={{
            size: 3,
        }}>
            <InputGroup>
                <Label for={"opt-type-input"} className={"mt-2 mr-1"}>Optimization Type</Label>
                <OptTypeInput/>
            </InputGroup>
        </Col>
        <Col className={"ml-3"} md={3}>
            <InputGroup>
                <Label for={"opt-type-input"} className={"mt-2 mr-1 ml-2"}>Optimization algorithm</Label>
                <OptAlg/>
            </InputGroup>
        </Col>
        <Col md={"0"} className={"ml-3"}>
            <Button color="primary">Search</Button>
        </Col>
        <Col md={"0"} className={"ml-3"}>
            <Button color="white">Calculate</Button>
        </Col>
    </FormGroup>
);

export default HeaderMain;
