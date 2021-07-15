import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { authCheckState } from "./store/actions/auth";
import { fetchAllProjects } from "./store/actions/projects";
import { lazyLoading } from "./store/actions/projects";

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
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Layout/Footer/Footer";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.project.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
    dispatch(lazyLoading());
    dispatch(authCheckState());
  }, [dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
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
                <Route path="/careers" component={Careers} />
                <Route path="/" component={Home} exact />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </Route>
          <Route component={NotFound} />
        </Switch>
      )}
    </Fragment>
  );
}

export default App;
