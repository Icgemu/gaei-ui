import React from 'react';
import 'rsuite-table/less/style.less';
import './table/style.less';

import FixedColumnTable from './table/examples/FixedColumnTable';
import PaginationTable from './table/examples/PaginationTable';
import ResizableColumnTable from './table/examples/ResizableColumnTable';
import CustomColumnTable from './table/examples/CustomColumnTable';
import TreeTable from './table/examples/TreeTable';
class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {

      return (
        <div>
        <FixedColumnTable />
        <hr/>
        <PaginationTable />
        <hr/>
        <ResizableColumnTable />
        <hr/>
        <CustomColumnTable />
        <hr/>
        <TreeTable />
        </div>
      );
    }
}

export default Form1;
