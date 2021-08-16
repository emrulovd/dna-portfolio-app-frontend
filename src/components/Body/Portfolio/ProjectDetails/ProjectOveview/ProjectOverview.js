import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProjectOverview.module.css";

const ProjectOverview = (props) => {
  return (
    <div className={classes.Wrapper}>
      <h3 className={classes.Title}>{props.project.project_type}</h3>
      <div className={classes.InnerWrapper}>
        <Container>
          <Row>
            <Col>
              <img
                className={classes.ProjectLogo}
                src={props.project.project_image_collection[1]}
                alt="logo of the project presented"
              />
            </Col>
            <Col>
              <p className={classes.Text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
          </Row>
          <Row className={classes.SecondaryRow}>
            <Col>
              <p className={classes.Text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
            <Col>
              <img
                className={classes.ProjectLogo}
                src={props.project.project_image_collection[1]}
                alt="logo of the project presented"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectOverview;
