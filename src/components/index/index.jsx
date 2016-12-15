import App from "../App/app.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router';
import Tab1 from '../tabs/Tabs1';
import Tab2 from '../tabs/Tabs2';
import Form1 from '../pages/Form1';
import Form2 from '../pages/Form2';
import Form3 from '../pages/Form3';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tabs from '../reducers/TabsReducers';

let store = createStore(tabs);

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute components={{side:Tab1,page:Form1}}/>
      <Route path="t1" components={{side:Tab1,page:Form1}}/>
      <Route path="t1/n1" components={{side:Tab1,page:Form1}}>
        <Route path="i1" component={Form1}/>
      </Route>
      <Route path="t1/n2" components={{side:Tab1,page:Form1}}/>
      <Route path="t1/n3" components={{side:Tab1,page:Form2}}/>
      <Route path="t2" components={{side:Tab2}}/>
      <Route path="t2/n4" components={{side:Tab2,page:Form2}}/>
      <Route path="t2/n5" components={{side:Tab2,page:Form2}}/>
      <Route path="t2/n6" components={{side:Tab2,page:Form1}}/>
    </Route>
  </Router>
  </Provider>
), document.body);
