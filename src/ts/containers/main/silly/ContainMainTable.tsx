import * as React from 'react';
import {Table} from "reactstrap";

const ContainMainTable = () => (
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
        <tr>
            <th scope={"row"}>No Data Found</th>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
        </tr>
        </tbody>
    </Table>
);

export default ContainMainTable;