///<reference path="../../../reduxElem/header/Search.tsx"/>
import * as React from 'react';
import {Button} from "reactstrap";
import {IStore} from "../../../store";
import {connect} from "react-redux";
import {getSearch} from "../../../reduxElem/header/Search";


interface UsersProps {
    isFetching?: boolean;
    error?: Error;
    dispatch?: any;
    dateStart?: string;

}

class Search extends React.Component<UsersProps, {}> {
    constructor(props: UsersProps) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        this.props.dispatch(getSearch(this.props.dateStart))
    }

    render() {
        const {isFetching, error} = this.props;
        if (error) {
            alert("Error");
        }
        if (isFetching) {
            console.log("wait");
        }
        return (
            <Button
                color="primary"
                onClick={this.onSearch}
            >
                Search
            </Button>
        );
    }
}

const mapStateToProps = (state: IStore) => ({
    isFetching: state.search.get.isFetching,
    error: state.search.get.error,
    dateStart: state.date.date
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
