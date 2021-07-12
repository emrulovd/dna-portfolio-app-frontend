import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authCheckState } from "./store/actions/auth";

import "./App.css";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Header from "./components/Layout/Navigation/Header";
import Home from "./components/Body/Home/Home";
import About from "./components/Body/About/About";
import Contact from "./components/Body/Contact/Contact";
import Portfolio from "./components/Body/Portfolio/Portfolio";
import Services from "./components/Body/Services/Services";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  return (
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
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} exact />
          </Switch>
        </main>
      </Route>
    </Switch>
  );
}

export default App;
