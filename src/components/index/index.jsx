import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router';
import Tab1 from '../tabs/Tabs1';
import Tab2 from '../tabs/Tabs2';
import Form1 from '../pages/Form1';
import Form2 from '../pages/Form1';
let app = <App topHeight='70' footerHeight='25' sidebarW='200'/>;
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Tab1}/>
      <Route path="/t1" component={Tab1}>
        <IndexRoute component={Form1}/>
        <Route path="/t1/n1" component={Form1}/>
        <Route path="/t1/n2" component={Form1}/>
        <Route path="/t1/n3" component={Form2}/>
      </Route>
      <Route path="/t2" component={Tab2}>
        <IndexRoute component={Form2}/>
        <Route path="/t2/n4" component={Form1}/>
        <Route path="/t2/n5" component={Form1}/>
        <Route path="/t2/n6" component={Form2}/>
      </Route>
    </Route>
  </Router>
), document.body);
