import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Cockpit.module.css";
import video from "../../../../assets/dna-video.mp4";

import Button from "../../../UI/Button/Button";

const Cockpit = () => {
  const history = useHistory();
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    setTimeout(() => setOverlay(true), 7000);
  });

  const navigateToServicesHandler = () => {
    history.push("/services");
  };

  const navigateToContactHandler = () => {
    history.push("/contact");
  };
  return (
    <div className={classes.Cockpit}>
      <video autoPlay muted src={video} type="video/mp4"></video>
      {overlay && (
        <div className={classes.Overlay} data-aos="fade-up">
          <div className={classes.TextWrapper}>
            <h2 className={classes.Title}>Software Development</h2>
            <p className={classes.Text}>
              Providing custotmers with inovative and <br /> fast solution
            </p>
            <Container fluid>
              <Row>
                <Col>
                  <Button className={classes.Button_Learn} buttonTheme="transparent" onClick={navigateToServicesHandler}>
                    Learn More
                  </Button>
                </Col>
                <Button className={classes.Button_Contact} onClick={navigateToContactHandler}>Get in Touch</Button>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cockpit;
