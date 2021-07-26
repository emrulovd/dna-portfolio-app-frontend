import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import HorizontalScroll from "react-scroll-horizontal";

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
    <div className={classes.Wrapper} >
      <h3 className={classes.Title}>
        <span className={classes.TextDecortion}>&lt;h3</span>
        Projects
        <span className={classes.TextDecortion}>/&gt;</span>
      </h3>
      <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
      >
        {projects.map((project, index) => {
          return (
            <div className={classes.InnerWrapper} key={index}>
              <Row>
                <Col>
                  <img
                    className={classes.ProjectImage}
                    src={project.project_image_collection[0]}
                    alt="..."
                  />
                </Col>
                <Col>
                  <div className={classes.ProjectInfo}>
                    <h4 className={classes.ProjectType}>{project.project_type}</h4>
                    <h4>{project.project_title}</h4>
                    <p>{project.project_description}</p>
                    <Button className={classes.Button}>See More</Button>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </HorizontalScroll>
    </div>
  );
};

export default Projects;
