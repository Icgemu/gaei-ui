import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute,Redirect , IndexRedirect,hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tabs from '../reducers/TabsReducers';
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
import TabsRoute from '../App/TabsRoute';
import {addTab} from '../reducers/index';

let store = createStore(tabs);

// hashHistory.listen(function (action) {
//   // console.log("action=>"+JSON.stringify(action));
//   if(action.action ==='POP'){
//     let state = store.getState();
//     let tabs = state.tabs;
//     // console.log("tabs=>"+JSON.stringify(tabs));
//   }
// })

const onRouteEnter = function(e,item){
  console.log("enter:"+JSON.stringify(e));
  let path = e.location.pathname;
  item = {path,id:item.id,title:item.title};
  store.dispatch(addTab(item));
}

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/t1" />
      <Route path="t1" component={Container1}>
        <IndexRedirect to="home"/>
        <Route path="home" component={Form1} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'home1',title:"首页1"})}}/>
        <Route path="n1" component={Page1} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'id1',title:"页面1"})}}/>
        <Route path="n2" component={Page2} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'id2',title:"页面2"})}}/>
        <Route path="n3" component={Page3} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:'id3',title:"页面3"})}}/>
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
