import * as React from 'react'
import {Col, Input} from "reactstrap";

const OptAlg = () => (
    <Col md={{
        size: 1.5,
    }}>

        <Input id={"opt-alg-input"} name={"opt-alg-input-name"} type={"select"}>
            <option>Genetic</option>
            <option>Ants</option>
            <option>Pareto</option>
            <option>VNS</option>
        </Input>
    </Col>
);

export default OptAlg;
