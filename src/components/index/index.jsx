import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tabs from '../reducers/TabsReducers';

import Container1 from '../Container/Container1';
import Container2 from '../Container/Container2';
let store = createStore(tabs);

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Container1}/>
      <Route path="t1" component={Container1}/>
      <Route path="t2" component={Container2}/>
    </Route>
  </Router>
  </Provider>
), document.body);
