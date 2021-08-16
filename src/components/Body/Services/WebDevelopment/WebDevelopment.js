import { useEffect } from "react";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./WebDevelopment.module.css";

import webDevelopmentBadge from "../../../../assets/services-icons/web-development.png";

import WebSoftware from "./WebSoftware/WebSoftware";

const WebDevelopment = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div className={classes.Wrapper} id='web'>
      <Container >
        <Row>
          <Col md={3} data-aos="fade-up">
            <img
              className={classes.Badge}
              src={webDevelopmentBadge}
              alt="..."
            />
          </Col>
          <div className={classes.Line}></div>
          <Col data-aos="fade-up">
            <p className={classes.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <WebSoftware />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebDevelopment;
