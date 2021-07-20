import { Container, Row } from "react-bootstrap";

import classes from "./ProjectList.module.css";

import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectList = (props) => {

  return (
    <div className={classes.Wrapper}>
      <Container fluid>
        {props.projects.map((project, index) => {
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
