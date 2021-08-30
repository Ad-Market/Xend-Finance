import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts';

import Landing from './pages/Landing';
import Staking from './pages/Staking';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/discover'>
            <Landing />
          </Route>
          <Route exact path='/staking'>
            <Staking />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
