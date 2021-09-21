import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateProject from "./CreateProject/CreateProject";
import ProjectsList from "./ProjectsList/ProjectsList";

import classes from "./AdminProjects.module.css";

const AdminProjects = () => {
  const projects = useSelector((state) => state.project.projects);
  const history = useHistory();

  const navigateToCreatHandler = () => {
    history.push('/admin/projects/edit');
  }

  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Title}>Projects</h1>
      <Switch>
        <Route path="/admin/projects/edit" exact>
          <CreateProject projects={projects}/>
        </Route>
        <Route path="/admin/projects/" exact>
          <ProjectsList projects={projects} navigateToCreatHandler = {navigateToCreatHandler}/>
        </Route>
      </Switch>
    </div>
  );
};

export default AdminProjects;
