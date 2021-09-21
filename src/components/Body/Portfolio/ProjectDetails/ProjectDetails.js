import React, { useEffect, Suspense, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchByIdProject } from "../../../../store/actions/projects";

import classes from "./ProjectDetails.module.css";
import Spinner from "../../../UI/Spinner/Spinner";
import ProjectOverview from "./ProjectOveview/ProjectOverview";
import ProjectShowcase from "./ProjectShowcase/ProjectShowcase";
import ProjectProcess from "./ProjectProcess/ProjectProcess";
import ProjectTechnologies from "./ProjectTechnologies/ProjectTechnologies";
import ProjectContact from "./ProjectContact/ProjectContact";
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
          <Spinner />
        ) : (
          <Fragment>
            <ProjectDetailsHeader project={project} />
            <ProjectOverview project={project}/>
            <ProjectShowcase project={project}/>
            <ProjectProcess/>
            <ProjectTechnologies project={project} />
            <ProjectContact />
          </Fragment>
        )}
      </Suspense>
    </div>
  );
};

export default ProjectDetails;
