import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";

import classes from "./ProjectList.module.css";

import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectList = () => {
  const projects = useSelector((state) => state.project.projects);

  return (
    <div className={classes.Wrapper}>
      <Container fluid>
        <h3 className={classes.Title}>Projetcts</h3>
        {projects.map((project, index) => {
          return (
            <Row key={index}>
              <ProjectItem
                project_index={index}
                project_title={project.project_title}
                project_description={project.project_description}
                project_image={project.project_image_collection[0]}
              />
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default ProjectList;
