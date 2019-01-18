import * as React from 'react'
import {Col, Input, InputGroup} from "reactstrap";
import {carrierNodes, getCarrier, selectCarrierType} from "../../../reduxElem/header/Carrier";
import {ICarriersResp} from "../../../services/carriers";




export interface CarrierProps {
    carrier: {
        selectedCarrier: string;
        carrierNodes: ICarriersResp[];
    }
    async: {
        isFetching?: boolean;
        error?: Error;
    }
    carrierDispatch: any;
    carrierSelectAction: selectCarrierType;
}

class CarrierInput extends React.Component<CarrierProps> {

    constructor(props: CarrierProps) {
        super(props);
        this.handleSelectedCarriers = this.handleSelectedCarriers.bind(this);
    }

    componentDidMount() {
        this.props.carrierDispatch(getCarrier());
    }


    handleSelectedCarriers(event: React.FormEvent<HTMLInputElement>) {
        this.props.carrierSelectAction(event.currentTarget.value); // action => store
    }



    render() {
        const carriersOption = this.props.carrier.carrierNodes.map(
            (carrierNode) => (<option key={carrierNode.id}>{carrierNode.name}</option>)
        );

        return (
            <Col md={"1.9"}>
                <InputGroup>
                    <Input
                        id={"optType-input"}
                        name={"optType-input-name"}
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
