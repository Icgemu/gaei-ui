import React from 'react';
import { Link } from 'react-router';
import Tabs from './Tabs';

class Tabs2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[
          {id:"id4",path:'/t2/n1',title:'普通表格4'},
          {id:"id5",path:'/t2/n2',title:'普通表格5'},
          {id:"id6",path:'/t2/n3',title:'普通表格6'}
        ]};
    }

    render() {

      return (
        <Tabs links={this.state.links} {...this.props}/>
      );
    }
}

export default Tabs2;
