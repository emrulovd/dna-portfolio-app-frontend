import React, { Fragment } from "react";
import { Switch, Route } from "react-router";

import Sidebar from "../Layout/Sidebar/Sidebar";
import AdminDashboard from "./Body/AdminDashboard/AdminDashboard";
import AdminProjects from "./Body/AdminProjects/AdminProjects";

const Admin = () => {
  return (
    <Fragment>
      <Sidebar />
      <Switch>
        <Route path="/admin/projects" component={AdminProjects} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Switch>
    </Fragment>
  );
};

export default Admin;
