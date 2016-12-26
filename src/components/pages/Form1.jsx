import React from 'react';
// import { Link } from 'react-router';
// import DialogButton from '../dialog/DialogButton';
// import {dialog} from '../dialog/Dialog';
// import {alertMsg} from '../dialog/Alertmsg';
import '../table/less/style.less';
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
      // let c = <div> dialog modal </div>;
      // let option = {
      //   id:'12333',
      //   title:'test',
      //   component:c,
      //   width:300,
      //   height:200
      // }
      // let button = <DialogButton option={option} className="btn btn-default"> open dialog</DialogButton>;
      // let msg = <Alertmsg msg="ok?" title="test" type="info" />
      // dialog(option);
      // alertMsg({msg:"ok?", title:"test", type:"warn"});
    }

    render() {

      return (
        <PaginationTable />
      );
    }
}

export default Form1;
