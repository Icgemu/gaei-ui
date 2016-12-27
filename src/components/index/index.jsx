import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute,Redirect , IndexRedirect,hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Container1 from '../Container/Container1';
import Container2 from '../Container/Container2';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Page6 from '../pages/Page6';
import Form1 from '../pages/Form1';
import Form2 from '../pages/Form2';
import {addTab,activeUrl} from '../reducers/index';
import store from './store';

import {FixedColumnTableComponent,PaginationTableComponent,ResizableColumnTableComponent,CustomColumnTableComponent,TreeTableComponent} from '../pages/table/FixedColumnTable'

const onRouteEnter = function(e,item){
  console.log("enter:"+e.location.pathname);
  let path = e.location.pathname;
  item = {path,id:item.id,title:item.title};
  store.dispatch(addTab(item));
  store.dispatch(activeUrl(path));
}

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/t1" />
      <Route path="t1" component={Container1}>
        <IndexRedirect to="t1"/>
        <Route path="t1" component={FixedColumnTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-1',title:"固定行列表格"})}}/>
        <Route path="t2" component={PaginationTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-2',title:"分页表格"})}}/>
        <Route path="t3" component={ResizableColumnTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-4',title:"可变列宽表格"})}}/>
        <Route path="t4" component={CustomColumnTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-4',title:"自定义行数据表格"})}}/>
        <Route path="t5" component={TreeTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-5',title:"树形固表格"})}}/>
      </Route>
      <Route path="t2" component={Container2}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Form2} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'home2',title:"首页2"})}}/>
        <Route path="n1" component={Page4} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'id4',title:"页面4"})}}/>
        <Route path="n2" component={Page5} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'id5',title:"页面5"})}}/>
        <Route path="n3" component={Page6} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'id6',title:"页面6"})}}/>
      </Route>
    </Route>
  </Router>
  </Provider>
), document.body);
