import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import * as DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css"

import {Moment} from "moment";

import {Button, Col, FormGroup, InputGroup, Label} from "reactstrap";

import OptAlg, {OptAlgProps} from "../silly/OptAlg";
import CarrierInput, {CarrierProps} from "../silly/Carrier";
import OptTypeInput, {OptTypeProps} from "../silly/OptType";

import {IStore} from "../../../store";

import {dateFormat, setDate, setDateType} from "../../../reduxElem/header/DateTime";
import {selectCarrier, selectCarrierType} from "../../../reduxElem/header/Carrier";
import {selectOptType, selectOptTypeType} from "../../../reduxElem/header/OptType";
import {selectOptAlg, selectOptAlgType} from "../../../reduxElem/header/OptAlg";
import Search from "./Search";


interface HeaderMainProps {
    carrierProps?: CarrierProps;
    optTypeProps?: OptTypeProps;
    optAlgProps?: OptAlgProps;

    carrierSelectAction?: selectCarrierType; // It's for change carriers in store
    dateTimeAction?: setDateType; // It's for change date in store
    optTypeSelectAction?: selectOptTypeType; // It's for change optType in store
    optAlgSelectAction?: selectOptAlgType; // It's for change optAlg in store

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
                        <OptTypeInput
                            optType={{
                                optTypeNodes: this.props.optTypeProps.optType.optTypeNodes,
                                selectedOptType: this.props.optTypeProps.optType.selectedOptType
                            }}
                            optTypeSelectAction={this.props.optTypeSelectAction}
                        />
                    </InputGroup>
                </Col>
                <Col className={"ml-3"} md={3}>
                    <InputGroup>
                        <Label for={"opt-type-input"} className={"mt-2 mr-1 ml-2"}>Optimization algorithm</Label>
                        <OptAlg
                            optAlg={{
                                optAlgNodes: this.props.optAlgProps.optAlg.optAlgNodes,
                                selectedOptAlg: this.props.optAlgProps.optAlg.selectedOptAlg
                            }}
                            optAlgSelectAction={this.props.optAlgSelectAction}
                        />
                    </InputGroup>
                </Col>
                <Col md={"0"} className={"ml-3"}>
                    <Search/>
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
    },

    optTypeProps: {
        optType: {
            optTypeNodes: state.optType.optTypeNodes,
            selectOptType: state.optType.selectedOptType
        }
    },

    optAlgProps: {
        optAlg: {
            optAlgNodes: state.optAlg.optAlgNodes,
            selectOptAlg: state.optAlg.selectedOptAlg
        }
    },


});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    carrierSelectAction: bindActionCreators(selectCarrier, dispatch),
    dateTimeAction: bindActionCreators(setDate, dispatch),
    optTypeSelectAction: bindActionCreators(selectOptType, dispatch),
    optAlgSelectAction: bindActionCreators(selectOptAlg, dispatch),
});


export default connect<{}, {}, HeaderMainProps>(mapStateToProps, mapDispatchToProps)(HeaderMain);
