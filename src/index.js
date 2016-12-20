import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Edit from './components/Edit';
import Add from './components/Add';
import All from './components/All';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={All}></IndexRoute>
        <Route path="/edit/:taskId" component={Edit}></Route>
		<Route path="/add" component={Add}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
