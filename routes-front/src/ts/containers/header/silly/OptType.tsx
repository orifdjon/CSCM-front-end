import * as React from "react";
import {Input} from "reactstrap";
import {optTypeNodes, selectOptTypeType} from "../../../reduxElem/header/OptType";

export interface OptTypeProps {
    optType: {
        selectedOptType: string;
        optTypeNodes: optTypeNodes;
    }
    optTypeSelectAction: selectOptTypeType;
}

class OptTypeInput extends React.Component<OptTypeProps> {

    constructor(props: OptTypeProps) {
        super(props);
        this.handlerSelectedOptType = this.handlerSelectedOptType.bind(this);
    }

    handlerSelectedOptType(event: React.FormEvent<HTMLInputElement>) {
        this.props.optTypeSelectAction(event.currentTarget.value);
    }

    render() {

        const optTypeOption = this.props.optType.optTypeNodes.map(
            (optTypeNode) => (<option key={optTypeNode.id}>{optTypeNode.optType}</option>
            )
        );

        return (
            <Input
                id={"opt-type-input"}
                name={"opt-type-input-name"}
                type={"select"}
                onChange={this.handlerSelectedOptType}
            >
                <option>None</option>
                {optTypeOption}
            </Input>
        );
    }
}

export default OptTypeInput
