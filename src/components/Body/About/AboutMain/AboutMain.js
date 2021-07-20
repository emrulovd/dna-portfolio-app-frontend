import { Container, Row, Col } from "react-bootstrap";

import classes from "./AboutMain.module.css";
import logo from "../../../../assets/dna-code-white.png";

const AboutMain = () => {
  return (
    <div className={classes.Wrapper}>
      <Container>
        <Row>
          <Col md={5}>
            <img className={classes.Logo} src={logo} alt="..." />
          </Col>
          <Col md={7}>
            <h1 className={classes.Title}>About</h1>
            <p className={classes.Text}>
              Establish a communication structure Decide what resources you’re
              ready to dedicate to collaboration with a vendor, and establish
              clear communication flows regarding different aspects of the
              project. Establish a communication structure Decide what resources
              you’re ready to dedicate to collaboration with a vendor, and
              establish clear communication flows regarding different aspects of
              the project.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMain;
