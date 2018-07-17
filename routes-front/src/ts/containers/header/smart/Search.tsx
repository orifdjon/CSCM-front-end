import * as React from 'react';
import {Button} from "reactstrap";
import {getSearch, getSearchType} from "../../../services/search";
import {IStore} from "../../../store";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";


interface UsersProps {
    isFetching?: boolean;
    error?: Error;
    getSearchAction?: getSearchType;
    dateStart?: string;
}

class Search extends React.Component<UsersProps, {}> {
    constructor(props: UsersProps) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        this.props.getSearchAction(this.props.dateStart)
    }

    render() {
        const {isFetching, error} = this.props;
        if (error) {
            alert("Error");
        }
        if (isFetching) {
            alert("wait");
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

const mapDipatchToProtps = (dispatch: Dispatch) => ({
    getSearchAction: bindActionCreators(getSearch, dispatch)
});

export default connect(mapStateToProps, mapDipatchToProtps)(Search);
