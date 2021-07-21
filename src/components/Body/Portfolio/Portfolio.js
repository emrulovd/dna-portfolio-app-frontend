import { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Portfolio.module.css";

import ProjectList from "./ProjectList/ProjectList";
import ProjectFilter from "./ProjectFilter/ProjectFilter";

const Portfolio = () => {
  const projects = useSelector((state) => state.project.projects);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const filterHandler = (tech) => {
    let projectsFiltered = [];
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].project_technologies.length; j++) {
        if (projects[i].project_technologies[j] === tech) {
          projectsFiltered.push(projects[i]);
        }
      }
    }
    setFilteredProjects(projectsFiltered);
  };

  return (
    <div className={classes.Wrapper}>
      <ProjectFilter filterHandler={filterHandler} />
      <ProjectList
        projects={filteredProjects.length === 0 ? projects : filteredProjects}
      />
    </div>
  );
};

export default Portfolio;
