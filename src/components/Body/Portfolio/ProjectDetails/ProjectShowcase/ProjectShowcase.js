import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProjectShowcase.module.css";

const ProjectShowcase = (props) => {
  return (
    <div className={classes.Wrapper}>
      <h3 className={classes.Title}>
        <span className={classes.TextDecortion}>&lt;h3</span>
        Showcase
        <span className={classes.TextDecortion}>/&gt;</span>
      </h3>
      <Container>
        {props.project.project_image_collection.map((image, index) => {
          if (index < 5) {
            return null;
          } else {
            return (
              <Row key={index} className={classes.RowWrapper}>
                <Col>
                  <video
                    autoPlay
                    loop
                    muted
                    src={image}
                    className={classes.Video}
                  ></video>
                </Col>
                <Col>
                  <p className={classes.Text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </Col>
              </Row>
            );
          }
        })}
      </Container>
    </div>
  );
};

export default ProjectShowcase;
