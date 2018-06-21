import * as React from 'react';
import {Button, Col, FormGroup, InputGroup, Label} from "reactstrap";
import OptAlg from "../silly/OptAlg";
import CarrierInput, {CarrierProps} from "../silly/Carrier";
import OptTypeInput from "../silly/OptType";
import * as DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css"
import {IStore} from "../../../store";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {selectCarrier, selectCarrierType} from "../../../reduxElem/Carrier";
import {Moment} from "moment";
import {dateFormat, setDate, setDateType} from "../../../reduxElem/DateTime";


interface HeaderMainProps {
    carrierProps?: CarrierProps;
    carrierSelectAction?: selectCarrierType;
    dateTimeAction?: setDateType;
}


class HeaderMain extends React.Component<HeaderMainProps> {


    constructor(props: HeaderMainProps) {
        super(props);
        this.handlerDateTime = this.handlerDateTime.bind(this);
    }

    handlerDateTime(moment: Moment) {
        this.props.dateTimeAction(moment.format(dateFormat));
    }


    render() {
        return (
            <FormGroup row className={"ml-1 mt-2 no-gutters"}>
                <Col md={{size: 0}}>
                    <InputGroup>
                        <Label for={"value-input"} className={"mt-2 mr-1"}>Carrier</Label>
                        <CarrierInput
                            carrier={{
                                carrierNodes: this.props.carrierProps.carrier.carrierNodes,
                                selectedCarrier: this.props.carrierProps.carrier.selectedCarrier
                            }}
                            carrierSelectAction={this.props.carrierSelectAction}
                        />
                    </InputGroup>
                </Col>
                <Col className={"ml-3"} md={"1"}>
                    <DateTime
                        dateFormat={"DD-MM-YYYY"}
                        timeFormat={false}
                        inputProps={{placeholder: 'select date', disabled: false}}
                        closeOnSelect={true}
                        onChange={this.handlerDateTime}
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
    }


}

const mapStateToProps = (state: IStore) => ({
    carrierProps: {
        carrier: {
            carrierNodes: state.carrier.carrierNodes,
            selectedCarrier: state.carrier.selectedCarrier
        }
    }
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    carrierSelectAction: bindActionCreators(selectCarrier, dispatch),
    dateTimeAction: bindActionCreators(setDate, dispatch)
});


export default connect<{}, {}, HeaderMainProps>(mapStateToProps, mapDispatchToProps)(HeaderMain);
