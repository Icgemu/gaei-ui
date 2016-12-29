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
import Tabs from '../tabs/Tabs'
import StatefulContainer from '../container/StatefulContainer'
import {AppConfig} from '../App/AppRouteConfig1'

const onRouteEnter = function(e,item){
  console.log("enter:"+e.location.pathname);
  let path = e.location.pathname;
  item = {path,id:item.id,title:item.title};
  store.dispatch(addTab(item));
  if(AppConfig.navibar){store.dispatch(activeUrl(path))}
}

const renderRoot = function(config){
  let index ;
  if(config.indexRoute){
    index = <IndexRedirect to={config.indexRoute} />
  }
  let navi = renderNavi(config);
  let root = (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path={config.path} component={config.naviTo}>
        {index}
        {navi}
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
      if(child.indexRoute){
        index = <IndexRedirect to={child.indexRoute} />
      }
      let left = renderLeftbar(child.navibar.path,child.leftbar)

      let route = renderLeftbar(child.navibar.path,child.router)
      let bar = [...child.leftbar];
      let parentRoute = config.path+child.navibar.path+"/"
      bar.map((group,i)=>{
         group.childs.map(route=>{
           route.path = parentRoute+route.path
         })
      })
      let DerivedContainer = ({children,...props})=>{
        let leftbar = <Tabs links={child.leftbar} />
        return (
          <StatefulContainer left={leftbar} {...props}>
            {children}
          </StatefulContainer>
        )
      }

      let root = (
        <Route path={child.navibar.path} component={DerivedContainer}>
          {index}
          {left}
          {route}
        </Route>
      );

      return root;
    });
  }else if (!config.leftbar) {

    return config.childs.map((child,i)=>{
      let Comp = child.naviTo
      let DerivedContainer = ({children,...props})=>{
        return (
          <StatefulContainer {...props}>
            <Comp/>
          </StatefulContainer>
        )
      }
      let root = <Route path={child.path} component={DerivedContainer} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:`${child.path}.${i}`,title:`${child.title}`})}} />
      return  root
    })
  }else{
    let left = renderLeftbar(config.path,config.childs)

    let bar = [...config.childs];
    let parentRoute = config.path
    bar.map((group,i)=>{
       group.childs.map(route=>{
         route.path = parentRoute+route.path
       })
    })
    let leftbar = <Tabs links={config.childs} />
    let DerivedContainer = ({children,...props})=>{
      return (
        <StatefulContainer left={leftbar} {...props}>
          {children}
        </StatefulContainer>
      )
    }
    let root = (
      <Route path={config.path} component={DerivedContainer}>
        {left}
      </Route>
    );

    return root;
  }
}

const renderLeftbar = function(parent,routes){
  let r = [];
  routes.map((child,i)=>{
    if(!child.group){
      child.id = `${parent}.${child.path}.${i}`;
      r.push(child);
    }else{
      child.childs.map((route,j)=>{
        route.id = `${parent}.${route.path}.${i}.${j}`;
        r.push(route);
      })
    }

  });

  return r.map(route=>{
    return (
      <Route path={route.path} component={route.naviTo} onEnter={(nextloc)=>{onRouteEnter(nextloc,{id:`${route.id}`,title:`${route.title}`})}}/>
    )
  })
}
let root = renderRoot(AppConfig);
ReactDOM.render(root,document.body);
