import classes from "./ProjectDetailsHeader.module.css";

const ProjectDetailsHeader = (props) => {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Title}>{props.project.project_title}</h1>
    </div>
  );
};

export default ProjectDetailsHeader;
