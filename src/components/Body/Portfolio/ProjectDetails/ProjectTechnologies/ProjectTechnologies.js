import { Container, Row, Col } from "react-bootstrap";

import classes from "./ProjectTechnologies.module.css";

const ProjectTechnologies = (props) => {
  return (
    <div className={classes.Wrapper}>
      <Container>
          <h3 className={classes.Title}>Technologies</h3>
        <Row>
          {props.project.project_technologies_images.map((tech, index) => {
            return (
              <Col key={index}>
                <img className={classes.TechImage} src={tech} alt="..." />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectTechnologies;
