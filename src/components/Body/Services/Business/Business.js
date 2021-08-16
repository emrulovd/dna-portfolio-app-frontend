import { useEffect } from "react";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Business.module.css";
import businessBadge from "../../../../assets/services-icons/bussines-software.png";

import BusinessSoftware from "./BusinessSoftware/BusinessSoftware";

const Business = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div className={classes.Wrapper} id='business'>
      <Container >
        <Row>
          <Col md={3} data-aos="fade-up">
            <img className={classes.Badge} src={businessBadge} alt="..." />
          </Col>
          <div className={classes.Line}></div>
          <Col data-aos="fade-up">
            <p className={classes.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <BusinessSoftware />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Business;
