// import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute,Redirect , IndexRedirect,hashHistory } from 'react-router';
import { Provider } from 'react-redux';
// import Container1 from '../Container/Container1';
// import Container2 from '../Container/Container2';
// import Page1 from '../pages/Page1';
// import Page2 from '../pages/Page2';
// import Page3 from '../pages/Page3';
// import Page4 from '../pages/Page4';
// import Page5 from '../pages/Page5';
// import Page6 from '../pages/Page6';
// import Form1 from '../pages/Form1';
// import Form2 from '../pages/Form2';
import {addTab,activeUrl} from '../reducers/index';
import store from './store';

// import {FixedColumnTableComponent,PaginationTableComponent,ResizableColumnTableComponent,CustomColumnTableComponent,TreeTableComponent} from '../pages/table/FixedColumnTable'
// import {PickerExample} from '../pages/picker/index.js'
// import {DatePickerApp} from '../pages/datepicker/deploy/app.js'
// import {EchartsApp} from '../pages/echarts/index.js'
import AppConfig from '../App/AppRouteConfig'

const onRouteEnter = function(e,item){
  console.log("enter:"+e.location.pathname);
  let path = e.location.pathname;
  item = {path,id:item.id,title:item.title};
  store.dispatch(addTab(item));
  store.dispatch(activeUrl(path));
}


const renderRoot = function(config){
  let index ;
  if(config.indexRoute){
    index = <IndexRedirect to=`${config.indexRoute}` />
  }
  let root = (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path=`${config.path}` component={config.naviTo}>
        {index}
        {renderNavi()}
        </Route>
      </Router>
    </Provider>
  )
  return root;
}

const renderNavi = function(config){
  if(config.navibar && config.leftbar){
    return config.childs.map(child=>{
      let index ;
      if(config.indexRoute){
        index = <IndexRedirect to=`${config.indexRoute}` />
      }
      let root = (
        <Route path=`${child.navibar.path}` component={child.naviTo}>
        {index}
        {renderLeftbar(config.navibar.path,config.leftbar)}
        {renderLeftbar(config.navibar.path,config.router)}
        </Route>
      );
      return root;
    });
  }
}

const renderLeftbar = function(parent,routes){
  let r = [];
  routes.map((child,i)=>{
    if(!child.group){
      child.id = `${parent}.${child.path}.${i}`;
      r.push(child);
    }else{
      routes.childs.map((route,j)=>{
        route.id = `${parent}.${route.path}.${i}.${j}`;
        r.push(route);
      })
    }

  });

  return r.map(route=>{
    return (<Route path=`${route.path}` component={route.naviTo}
        onEnter={(nextloc)=>{
          onRouteEnter(nextloc,{id:`${route.id}`,title:`${route.title}`})}}/>
        )
  })
}
let root = renderRoot(AppConfig);
ReactDOM.render(root,document.body);
// ReactDOM.render((
//   <Provider store={store}>
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRedirect to="/t4" />
//       <Route path="t1" component={Container1}>
//         <IndexRedirect to="t1"/>
//         <Route path="t1" component={FixedColumnTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-1',title:"固定行列表格"})}}/>
//         <Route path="t2" component={PaginationTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-2',title:"分页表格"})}}/>
//         <Route path="t3" component={ResizableColumnTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-3',title:"可变列宽表格"})}}/>
//         <Route path="t4" component={CustomColumnTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-4',title:"自定义行数据表格"})}}/>
//         <Route path="t5" component={TreeTableComponent} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t1-5',title:"树形固表格"})}}/>
//       </Route>
//       <Route path="t2" component={Container1}>
//         <IndexRedirect to="t1"/>
//         <Route path="t1" component={PickerExample} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t2-1',title:"选择器"})}}/>
//       </Route>
//       <Route path="t3" component={Container1}>
//         <IndexRedirect to="t1"/>
//         <Route path="t1" component={DatePickerApp} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t3-1',title:"时间选择器"})}}/>
//       </Route>
//       <Route path="t4" component={Container1}>
//         <IndexRedirect to="t1"/>
//         <Route path="t1" component={EchartsApp} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'t4-1',title:"Echarts"})}}/>
//       </Route>
//     </Route>
//   </Router>
//   </Provider>
// ), document.body);
