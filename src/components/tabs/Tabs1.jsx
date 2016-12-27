import React from 'react';
import { Link } from 'react-router';
import Tabs from './Tabs';

class Tabs1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[
          {id:'t1',path:'/t1',title:'表格',childs:[
            {id:'t1-1',path:'/t1/t1',title:'固定行列表格'},
            {id:'t1-2',path:'/t1/t2',title:'分页表格'},
            {id:'t1-3',path:'/t1/t3',title:'可变列宽表格'},
            {id:'t1-4',path:'/t1/t4',title:'自定义行数据表格'},
            {id:'t1-5',path:'/t1/t5',title:'树形固表格'}
          ]},
          {id:'t2',path:'/t2',title:'选择器',childs:[
            {id:'t2-1',path:'/t2/t1',title:'选择器样例'}
          ]},
          {id:'t3',path:'/t3',title:'Echarts插件'}
        ]};
    }

    render() {

      return (
        <Tabs links={this.state.links} {...this.props}/>
      );
    }
}

export default Tabs1;
