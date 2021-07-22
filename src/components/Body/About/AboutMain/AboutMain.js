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
            DNA Code is a small, independent company led by developers. As a small
            team, we aim at delivering the best possible customer service and experience. 
            Whilst, providing quality on par with more eastablished companies. Our business 
            structure allows us to be closer to our customers and provides a direct 
            connection between developers and clients. Being a small company 
            does not mean smaller capabilities but better customer knowledge. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMain;
