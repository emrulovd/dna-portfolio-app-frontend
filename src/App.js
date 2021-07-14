import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Careers from "./components/Body/Careers/Careers";
import NotFound from './components/NotFound/NotFound';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  return (
    <Switch>
      {!isAuthenticated && <Route path="/auth/login" component={Auth} />}
      {isAuthenticated && <Route path="/admin" component={Admin} />}
      <Route path="" exact>
        <Header />
        <main>
          <Switch>
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/careers" component={Careers}/>
            <Route path="/" component={Home} exact />
            <Route component={NotFound}/>
          </Switch>
        </main>
      </Route>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default App;
