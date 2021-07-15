import { useEffect } from "react";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Services.module.css";
import bussinesIcon from "../../../../assets/services-icons/bussines-software.png";
import eCommerceIconIcon from "../../../../assets/services-icons/e-commerce.png";
import graphicDesignIcon from "../../../../assets/services-icons/graphic-design.png";
import mobileAppIcon from "../../../../assets/services-icons/mobile-app.png";
import webDevelpomentIcon from "../../../../assets/services-icons/web-development.png";

const Services = () => {
  const icons = [
    { icon: bussinesIcon },
    { icon: mobileAppIcon },
    { icon: webDevelpomentIcon },
    { icon: eCommerceIconIcon },
    { icon: graphicDesignIcon },
  ];

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className={classes.Wrapper} data-aos="zoom-in">
      <Container fluid>
        <h3 className={classes.Title}>Software Development</h3>
        <Row>
          {icons.map((icon, index) => {
            return (
              <Col key={index}>
                <img className={classes.Icon} src={icon.icon} alt="..." />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
