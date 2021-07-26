import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchByIdProject } from "../../../../store/actions/projects";

import classes from "./ProjectDetails.module.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = useSelector((state) => state.project.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByIdProject(id));
  }, [dispatch, id]);

  return (
    <div className={classes.Wrapper}>
      <h1>{project.project_title}</h1>
    </div>
  );
};

export default ProjectDetails;
