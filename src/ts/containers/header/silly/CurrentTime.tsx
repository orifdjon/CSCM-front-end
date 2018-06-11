import * as React from 'react';
import {Row} from "reactstrap";

interface ICurrentTimeState {
    curTime: string;
}

interface ICurrentProps {

}

//TODO implement this class
//this class don't work correct
export default class CurrentTime extends React.Component<ICurrentProps, ICurrentTimeState> {
    constructor(props: ICurrentProps) {
        super(props);
        this.state = {
            curTime: Date.toLocaleString()
        };
    }

    componentDidMount() {
        setInterval(() => (
            this.setState({
                curTime:  Date.toLocaleString()
            })
        ), 1000)
    }

    render() {
        console.log(this.state.curTime);
        return (
            <Row>
                <p className={"text-white"}>Date of Stats Loading: {this.state.curTime}</p>
            </Row>
        );
    }
}
