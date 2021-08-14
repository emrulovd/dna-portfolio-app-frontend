import classes from "./ProjectDetailsHeader.module.css";

const ProjectDetailsHeader = (props) => {
  return (
    <div
      className={classes.Wrapper}
      style={{
        background: `url(${props.project.project_image_collection[0]})`,
        backgroundSize: "100% 100%",
        backgroundReapet: 'no-repeat'
      }}
    >
    </div>
  );
};

export default ProjectDetailsHeader;
