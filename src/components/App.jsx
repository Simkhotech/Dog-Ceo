import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from 'react-bootstrap/lib/Navbar';

import * as Routes from './Routes';


import configureStore from '../store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Dog-ceo</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Routes.BreedList} />
          <Route path="/dog/:breed/:subBreed" component={Routes.BreedPage} />
          <Route path="/dog/:breed" component={Routes.BreedPage} />
          <Route component={Routes.PageNotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  </Provider>
);
export default App;
