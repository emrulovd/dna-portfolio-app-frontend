import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchByIdProject } from "../../../../store/actions/projects";

import classes from "./ProjectDetails.module.css";
import Spinner from '../../../UI/Spinner/Spinner';
const ProjectDetailsHeader = React.lazy(() =>
  import("./ProjectDetailsHeader/ProjectDetailsHeader")
);

const ProjectDetails = () => {
  const { id } = useParams();
  const project = useSelector((state) => state.project.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByIdProject(id));
  }, [dispatch, id]);

  return (
    <div className={classes.Wrapper}>
      <Suspense fallback={<div>...loading</div>}>
        {project === null ? (
          <Spinner/>
        ) : (
          <ProjectDetailsHeader project={project} />
        )}
      </Suspense>
    </div>
  );
};

export default ProjectDetails;
