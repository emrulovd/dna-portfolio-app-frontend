import { useEffect } from "react";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Header.module.css";

import bussinesSoftware from "../../../../assets/services-icons/bussines-software.png";
import eCommerce from "../../../../assets/services-icons/e-commerce.png";
import graphicDesign from "../../../../assets/services-icons/graphic-design.png";
import mobileApp from "../../../../assets/services-icons/mobile-app.png";
import webDevelopment from "../../../../assets/services-icons/web-development.png";

const Header = () => {
  const services = [
    { badge: bussinesSoftware, link: "#business" },
    { badge: eCommerce, link: "#ecommerce" },
    { badge: webDevelopment, link: "#web" },
    { badge: mobileApp, link: "#mobile" },
    { badge: graphicDesign, link: "#graphicdesign" },
  ];

  useEffect(() => {
    Aos.init({
      durattion: 2000,
    });
  });

  return (
    <div className={classes.Wrapper} data-aos="fade-up">
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
                  <a href={service.link}>
                    <img
                      className={classes.Badge}
                      src={service.badge}
                      alt="..."
                    />
                  </a>
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
