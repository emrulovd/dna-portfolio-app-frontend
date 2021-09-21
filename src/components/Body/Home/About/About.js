import React, { useEffect, useState } from "react";
import Aos from "aos";

import { Container, Row, Col } from "react-bootstrap";
import classes from "./About.module.css";
import logo from '../../../../assets/dna-code-white.png'

import Scramble from "../../../../helpers/animation/Scramble";
import Objectives from "./Objectives/Objectives";

const About = () => {
  const [scramble, setScramble] = useState(false);

  const onScramble = () => {
    if (window.scrollY >= 400 && window.scrollY <= 1000) {
      setScramble(true);
    } else {
      setScramble(false);
    }
  };

  window.addEventListener("scroll", onScramble);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.Wrapper}>
      <Container data-aos="fade-up">
        <Row>
          <Col sm={4}>
            <div >
              <img className={classes.Logo} src={logo} alt="Logo of the software company"/>
            </div>
          </Col>
          <Col sm={7}>
            <div className={classes.Text} >
              <h3>
                <span className={classes.TextDecortion}>&lt;h3</span>
                    <Scramble start={scramble} text="About us" />
                <span className={classes.TextDecortion}>/&gt;</span>
              </h3>
              <p>
                Establish a communication structure Decide what resources you’re
                ready to dedicate to collaboration with a vendor, and establish
                clear communication flows regarding different aspects of the
                project.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row data-aos="fade-up">
          <Objectives />
        </Row>
      </Container>
    </div>
  );
};

export default About;
