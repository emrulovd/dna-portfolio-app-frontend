import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProjectOverview.module.css";

const ProjectOverview = (props) => {
  return (
    <div className={classes.Wrapper}>
      <h3 className={classes.Title}>
        <span className={classes.TextDecortion}>&lt;h3</span>
        {props.project.project_type}
        <span className={classes.TextDecortion}>/&gt;</span>
      </h3>
      <div className={classes.InnerWrapper}>
        <Container>
          <Row>
            <Col>
              <img
                className={classes.ProjectLogo}
                src={props.project.project_image_collection[2]}
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
            <Col md={6}>
              <div
                className={classes.VideoWrapper}
                style={{
                  background: `url(${props.project.project_image_collection[4]})`,
                  backgroundSize: "100% 100%",
                  backgroundReapet: "no-repeat",
                  width: "620px",
                  height: "310px",
                }}
              >
                <video
                  className={classes.ProjectVideo}
                  autoPlay
                  loop
                  muted
                  src={props.project.project_image_collection[3]}
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectOverview;
