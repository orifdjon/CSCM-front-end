import * as React from "react";
import {Col, FormGroup, Input, InputGroup, Label} from "reactstrap";

const OptTypeInput = () => (
        <Input id={"opt-type-input"} name={"opt-type-input-name"} type={"select"}>
            <option>None</option>
            <option>Cost optimization</option>
            <option>Elapsed time optimization</option>
            <option>Complex optimization</option>
        </Input>
);

export default OptTypeInput
