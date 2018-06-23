import * as React from 'react';
import { connect, Dispatch, DispatchProp } from 'react-redux';
import { IStore } from '../store';
import {getList, Error, get} from '../reduxElem/users';
import { IUser } from '../services/users';
import {bindActionCreators} from "redux";

interface UsersProps  {
    isFetching?: boolean;
    error?: Error;
    users?: IUser[];
    getListDispatch?: any;
    getDispatch?: any
}

class Users extends React.Component<UsersProps, {}> {
    componentDidMount() {
        this.props.getListDispatch();
    }

    render() {
        const { isFetching, error, users } = this.props;

        if (error) {
            return <b>Произошла ошибка!</b>
        }

        if (isFetching) {
            return '...';
        }

        return users.map((user) => <div>{user.name}</div>);
    }
}

const mapStateToProps = (state: IStore, ownProps: UsersProps) => ({
    isFetching: state.users.getList.isFetching,
    error: state.users.getList.error,
    users: state.users.getList.data
});

const mapStateToDispatch = (dispatch: Dispatch) => ({
    getListDispatch: bindActionCreators(getList, dispatch),
    getDispatch: bindActionCreators(get, dispatch)
});

export default connect<{}, {}, UsersProps>(mapStateToProps, mapStateToDispatch)(Users);