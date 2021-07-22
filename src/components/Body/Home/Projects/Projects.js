import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";

import { fetchAllProjects } from "../../../../store/actions/projects";

import Button from "../../../UI/Button/Button";
import classes from "./Projects.module.css";

const Projects = () => {
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
    Aos.init({
      duration: 2000,
    });
  }, [dispatch]);

  return (
    <div className={classes.Wrapper}>
      <Container fluid data-aos="zoom-in">
        <h3 className={classes.Title}>
          <span className={classes.TextDecortion}>&lt;h3</span>
          Projects
          <span className={classes.TextDecortion}>/&gt;</span>
        </h3>
        <Row>
          <Col>
            <img
              className={classes.ProjectImage}
              src={projects[0].project_image_collection[0]}
              alt="..."
            />
          </Col>
          <Col>
            <div className={classes.ProjectInfo}>
              <h4>WEB DEVELOPMENT</h4>
              <h4>{projects[0].project_title}</h4>
              <p>{projects[0].project_description}</p>
              <Button className={classes.Button}>See More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
