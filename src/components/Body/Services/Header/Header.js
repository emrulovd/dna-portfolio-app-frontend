import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Header.module.css";

import bussinesSoftware from "../../../../assets/services-icons/bussines-software.png";
import eCommerce from "../../../../assets/services-icons/e-commerce.png";
import graphicDesign from "../../../../assets/services-icons/graphic-design.png";
import mobileApp from "../../../../assets/services-icons/mobile-app.png";
import webDevelopment from "../../../../assets/services-icons/web-development.png";

const Header = () => {
  const services = [
    { badge: bussinesSoftware },
    { badge: eCommerce },
    { badge: webDevelopment },
    { badge: mobileApp },
    { badge: graphicDesign },
  ];

  return (
    <div className={classes.Wrapper}>
      <Container fluid>
        <h3 className={classes.Title}>
          <span className={classes.TextDecoration}>&lt;h3</span>
          What do we offer
          <span className={classes.TextDecoration}>/&gt;</span>
        </h3>
        <div className={classes.RowWrapper}>
          <Row>
            {services.map((service, index) => {
              return (
                <Col key={index} xs={2}>
                  <img
                    className={classes.Badge}
                    src={service.badge}
                    alt="..."
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
