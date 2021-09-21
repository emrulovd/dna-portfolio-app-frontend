import { Container, Row, Col } from "react-bootstrap";

import classes from "./ProjectProcess.module.css";
import work_process from "../../../../../assets/work-process.png";

const ProjectProcess = () => {
  return (
    <div className={classes.Wrapper}>
      <h3 className={classes.Title}>
        <span className={classes.TextDecortion}>&lt;h3</span>
        Work Process
        <span className={classes.TextDecortion}>/&gt;</span>
      </h3>
      <Container>
        <Row>
          <Col>
            <img
              src={work_process}
              alt="the work process of the company"
              className={classes.Image}
            />
          </Col>
          <Col>
            <p className={classes.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectProcess;
