import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute,Redirect , hashHistory } from 'react-router';
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
let store = createStore(tabs);

hashHistory.listen(function (action) {
  if(action.action ==='POP'){
    let state = store.getState();
    let tabs = state.tabs;
    console.log(JSON.stringify(tabs));
  }

})

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="t1" component={Container1}>
        <Route path="n1" component={Page1} />
        <Route path="n2" component={Page2} />
        <Route path="n3" component={Page3} />
      </Route>
      <Route path="t2" component={Container2}>
        <Route path="n1" component={Page4} />
        <Route path="n2" component={Page5} />
        <Route path="n3" component={Page6} />
      </Route>
      <Redirect from="/" to="/t1/n1"/>
    </Route>
  </Router>
  </Provider>
), document.body);
