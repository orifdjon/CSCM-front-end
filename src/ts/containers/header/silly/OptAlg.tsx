import * as React from 'react'
import {Col, Input} from "reactstrap";

const OptAlg = () => (
    <Input id={"opt-alg-input"} name={"opt-alg-input-name"} type={"select"}>
        <option>None</option>
        <option>Genetic</option>
        <option>Ants</option>
        <option>Pareto</option>
        <option>VNS</option>
    </Input>
);

export default OptAlg;
