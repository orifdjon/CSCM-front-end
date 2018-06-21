import * as React from 'react'
import {Col, Input, InputGroup} from "reactstrap";
import {carrierNodes, selectCarrierType} from "../../../reduxElem/Carrier";



export interface CarrierProps {
    carrier: {
        selectedCarrier: string;
        carrierNodes: carrierNodes;
    }
    carrierSelectAction: selectCarrierType;
}

class CarrierInput extends React.Component<CarrierProps> {

    constructor(props: CarrierProps) {
        super(props);
        this.handleSelectedCarriers = this.handleSelectedCarriers.bind(this);
    }


    handleSelectedCarriers(event: React.FormEvent<HTMLInputElement>) {
        this.props.carrierSelectAction(event.currentTarget.value); // action => store
    }

    render() {
        const carriersOption = this.props.carrier.carrierNodes.map(
            (carrierNode) => (<option key={carrierNode.id}>{carrierNode.carrier}</option>
            )
        );

        return (
            <Col md={"1.9"}>
                <InputGroup>
                    <Input
                        id={"carrier-input"}
                        name={"carrier-input-name"}
                        type={"select"}
                        onChangeCapture={this.handleSelectedCarriers}
                        >
                        <option>None</option>
                        {carriersOption}
                    </Input>
                </InputGroup>
            </Col>
        );
    }
}

export default CarrierInput;
