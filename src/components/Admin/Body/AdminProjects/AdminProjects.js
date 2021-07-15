import CreateProject from "./CreateProject/CreateProject";

import classes from "./AdminProjects.module.css";

const AdminProjects = () => {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Title}>Projetcs</h1>
      <CreateProject />
    </div>
  );
};

export default AdminProjects;
