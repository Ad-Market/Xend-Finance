import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/discover'>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
