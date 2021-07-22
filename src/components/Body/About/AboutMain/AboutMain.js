import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Scramble from '../../../../helpers/animation/Scramble';

import classes from "./AboutMain.module.css";
import logo from "../../../../assets/dna-code-white.png";

const AboutMain = () => {
  const [scramble, setScramble] = useState(true);

  const onScramble = () => {
    if (window.scrollY === 0 ) {
      setScramble(true);
    } else {
      setScramble(false);
    }
  };

  window.addEventListener("scroll", onScramble);

  return (
    <div className={classes.Wrapper}>
      <Container>
        <Row>
          <Col md={5}>
            <img className={classes.Logo} src={logo} alt="..." />
          </Col>
          <Col md={7}>
            <h1 className={classes.Title}>
              <span className={classes.TextDecortion}>&lt;h1</span>
              <Scramble start={scramble} text="About"/>
              <span className={classes.TextDecortion}>/&gt;</span>
            </h1>
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
