import * as React from 'react';
import Add from "../silly/BtnsMainTable/Add";
import Delete from "../silly/BtnsMainTable/Delete";
import Export from "../silly/BtnsMainTable/Export";
import Recalculate from "../silly/BtnsMainTable/Recalculate";

export default class BtnsMainTable extends React.Component {
    render() {
        return [
            <Add/>,
            <Delete/>,
            <Export/>,
            <Recalculate/>,
        ];
    }
}