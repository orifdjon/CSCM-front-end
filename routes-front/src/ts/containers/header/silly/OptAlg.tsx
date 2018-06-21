import * as React from 'react'
import {Input} from "reactstrap";
import {optAlgNodes, selectOptAlgType} from "../../../reduxElem/header/OptAlg";

export interface OptAlgProps {
    optAlg: {
        selectedOptAlg: string;
        optAlgNodes: optAlgNodes;
    }
    optAlgSelectAction: selectOptAlgType;
}


class OptAlg extends React.Component<OptAlgProps> {
    constructor(props: OptAlgProps) {
        super(props);
        this.handleSelectedOptAlg = this.handleSelectedOptAlg.bind(this);
    }

    handleSelectedOptAlg(event: React.FormEvent<HTMLInputElement>) {
        this.props.optAlgSelectAction(event.currentTarget.value);
    }

    render() {
        const optAlgOption = this.props.optAlg.optAlgNodes.map(
            (optAlgNode) => (<option key={optAlgNode.id}>{optAlgNode.optAlg}</option>
            )
        );

        return (
            <Input
                id={"opt-alg-input"}
                name={"opt-alg-input-name"}
                type={"select"}
                onChange={this.handleSelectedOptAlg}
            >
                <option>None</option>
                {optAlgOption}
            </Input>
        );
    }
}

export default OptAlg;
