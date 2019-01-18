import * as React from 'react';
import {Table} from "reactstrap";
import {connect} from "react-redux";
import {IStore} from "../../../store";
import {ISearchResp} from "../../../services/search";

interface ContainMainTableProps {
    data: ISearchResp[];
}


class ContainMainTable extends React.Component<ContainMainTableProps, {}> {

    render() {
        const dataOptions = this.props.data.map((node) => {
            return (
                <tr>
                    <th scope={"row"}>{node.n}</th>
                    <td>{node.fdate}</td>
                    <td>{node.points}</td>
                    <td>{node.status}</td>
                    <td>{node.length}</td>
                    <td>{node.time}</td>
                    <td>{node.cost}</td>
                </tr>
            );
        });

        return (
            <Table hover striped>
                <thead>
                <tr>
                    <th>ROUTE NUMBER</th>
                    <th>DATE</th>
                    <th>NUMBER OF POINTS</th>
                    <th>STATUS</th>
                    <th>LENGTH</th>
                    <th>TIME</th>
                    <th>COST</th>
                </tr>
                </thead>

                <tbody>
                    {dataOptions}
                </tbody>
            </Table>
        );
    }
}


const mapStateToProps = (state: IStore) => ({
    data: state.search.get.data
});

/*const mapDispatchToProps = () => {

};*/

export default connect(mapStateToProps)(ContainMainTable);