import * as React from "react";
import {Col, FormGroup, Input, InputGroup, Label} from "reactstrap";

const OptTypeInput = () => (
    <Col md={{
        size: 1.5,
    }}>

        <Input id={"opt-type-input"} name={"opt-type-input-name"} type={"select"}>
            <option>Cost optimization</option>
            <option>Elapsed time optimization</option>
            <option>Complex optimization</option>
        </Input>
    </Col>
);

export default OptTypeInput
