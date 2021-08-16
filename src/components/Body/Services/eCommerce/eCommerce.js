import { useEffect } from "react";
import Aos from 'aos';
import { Container, Row, Col } from "react-bootstrap";

import classes from "./eCommerce.module.css";

import eCommerceBadge from "../../../../assets/services-icons/e-commerce.png";

import ECommerceSoftware from "./ECommerceSoftware/ECommerceSoftware";

const ECommerce = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  return (
    <div className={classes.Wrapper} id='ecommerce'>
      <Container >
        <Row>
          <Col md={3} data-aos='fade-up'>
            <img className={classes.Badge} src={eCommerceBadge} alt="..." />
          </Col>
          <div className={classes.Line}></div>
          <Col data-aos='fade-up'>
            <p className={classes.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ECommerceSoftware/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ECommerce;
