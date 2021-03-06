import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux';

import store from './redux-files/store';
 
import App from './containers/App';
import AddProjectPage from './containers/AddProjectPage';
import EditProjectPage  from './containers/EditProjectPage';
import ProjectsPage from './containers/ProjectsPage';
import TimeTrackerPage from './containers/TimeTrackerPage';

import './helpers/polyfill.js';
import './styles/index.scss';
// import './styles/icons/fontastic-icons.css';
import './styles/icons/fonts/style.css';

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TimeTrackerPage}/>
        <Route path="/projects" component={ProjectsPage}/>
        <Route path="/projects/new" component={AddProjectPage}/>
        <Route path="/projects/:projectId" component={EditProjectPage}/>
      </Route>  
    </Router>
  </Provider>
),document.getElementById('root'));

