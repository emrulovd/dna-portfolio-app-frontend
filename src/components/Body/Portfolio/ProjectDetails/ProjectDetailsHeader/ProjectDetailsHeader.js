import classes from "./ProjectDetailsHeader.module.css";

const ProjectDetailsHeader = (props) => {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Title}>{props.project.project_title}</h1>
      <img className={classes.ProjectImage} src={props.project.project_image_collection[0]} alt='...'/>
    </div>
  );
};

export default ProjectDetailsHeader;
