import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Header from "./components/Layout/Navigation/Header";
import Home from "./components/Body/Home/Home";
import About from './components/Body/About/About';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/auth/login">
          <Auth />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Header />
          <main>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
            </Switch>
          </main>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
