import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import { Col } from "react-bootstrap";

import classes from "./ProjectItem.module.css";

import Button from "../../../../UI/Button/Button";

const ProjectItem = (props) => {
  const history = useHistory();
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const projectDetailsNavigationHandler = () => {
    history.replace(`/portfolio/project/${props.project_id}`);
  };

  return (
    <Fragment>
      {props.project_index % 2 === 1 ? (
        <Fragment>
          <Col data-aos="fade-up">
            <div className={classes.ProjectInfoLeft}>
              <h4 className={classes.ProjectType}>{props.project_type}</h4>
              <h4>{props.project_title}</h4>
              <p>{props.project_description}</p>
              <Button
                className={classes.Button}
                onClick={projectDetailsNavigationHandler}
              >
                See More
              </Button>
            </div>
          </Col>
          <Col data-aos="fade-up">
            <img
              className={classes.ProjectImage}
              src={props.project_image}
              alt="..."
            />
          </Col>
        </Fragment>
      ) : (
        <Fragment>
          <Col data-aos="fade-up">
            <img
              className={classes.ProjectImage}
              src={props.project_image}
              alt="..."
            />
          </Col>
          <Col data-aos="fade-up">
            <div className={classes.ProjectInfoRight}>
              <h4 className={classes.ProjectType}>{props.project_type}</h4>
              <h4>{props.project_title}</h4>
              <p>{props.project_description}</p>
              <Button
                className={classes.Button}
                onClick={projectDetailsNavigationHandler}
              >
                See More
              </Button>
            </div>
          </Col>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProjectItem;
