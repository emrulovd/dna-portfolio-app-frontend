import React, { Fragment } from "react";
import { Switch, Route } from "react-router";

import Sidebar from "../Layout/Sidebar/Sidebar";
import AdminDashboard from "./Body/AdminDashboard/AdminDashboard";

const Admin = () => {
  return (
    <Fragment>
      <Sidebar />
      <Switch>
        <Route path="/" component={AdminDashboard} />
      </Switch>
    </Fragment>
  );
};

export default Admin;
