import { Fragment } from "react";
import { Col } from "react-bootstrap";

import classes from "./ProjectItem.module.css";

import Button from "../../../../UI/Button/Button";

const ProjectItem = (props) => {
  return (
    <Fragment>
      {props.project_index  % 2 === 1 ? (
        <Fragment>
          <Col>
            <div className={classes.ProjectInfoLeft}>
              <h4>WEB DEVELOPMENT</h4>
              <h4>{props.project_title}</h4>
              <p>{props.project_description}</p>
              <Button className={classes.Button}>See More</Button>
            </div>
          </Col>
          <Col>
            <img
              className={classes.ProjectImage}
              src={props.project_image}
              alt="..."
            />
          </Col>
        </Fragment>
      ) : (
        <Fragment>
          <Col>
            <img
              className={classes.ProjectImage}
              src={props.project_image}
              alt="..."
            />
          </Col>
          <Col>
            <div className={classes.ProjectInfoRight}>
              <h4>WEB DEVELOPMENT</h4>
              <h4>{props.project_title}</h4>
              <p>{props.project_description}</p>
              <Button className={classes.Button}>See More</Button>
            </div>
          </Col>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProjectItem;
