import React from 'react';
import { Link } from 'react-router';
import Tabs from './Tabs';

class Tabs1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[
          {id:'id1',path:'/t1/n1',title:'普通表格1'},
          {id:'id2',path:'/t1/n2',title:'普通表格2'},
          {id:'id3',path:'/t1/n3',title:'普通表格3'}
        ]};
    }

    render() {

      return (
        <Tabs links={this.state.links} {...this.props}/>
      );
    }
}

export default Tabs1;
