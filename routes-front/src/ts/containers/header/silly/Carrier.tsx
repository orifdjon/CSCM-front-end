import * as React from 'react'
import {Col, Dropdown, FormGroup, Input, InputGroup, Label} from "reactstrap";


const CarrierInput = () => (
    <Col md={{
        size: 1.9,
    }}>
        <InputGroup>
            <Input id={"carrier-input"} name={"carrier-input-name"} type={"select"}>
                <option>None</option>
                <option>Internal</option>
            </Input>
        </InputGroup>
    </Col>
);

export default CarrierInput;
