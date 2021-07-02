import React, { Fragment } from 'react'; 
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Admin from './components/Admin/Admin';
import Auth from './components/Auth/Auth';
import Header from './components/Layout/Navigation/Header';
import Home from './components/Body/Home/Home';

function App() {
  return (
    <Fragment>
      <Switch>
          <Route path="/auth/login">
              <Auth/>
          </Route>
          <Route path='/admin'>
              <Admin/>
          </Route>
          <Route path="/">
            <Header/>
            <main>
                <Home/>
            </main>
          </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
