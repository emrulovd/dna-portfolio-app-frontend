import { useEffect } from "react";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./GraphicDesign.module.css";

import graphicDesignBadge from "../../../../assets/services-icons/graphic-design.png";
import DesignServices from "./DesignServices/DesignServices";

const GraphicDesign = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div className={classes.Wrapper} id='graphicdesign'>
      <Container data-aos="fade-up">
        <Row>
          <Col md={3}>
            <img className={classes.Badge} src={graphicDesignBadge} alt="..." />
          </Col>
          <div className={classes.Line}></div>
          <Col>
            <p className={classes.Text}>
              By gathering and analyzing the requirments of the client our graphic design 
              experties strive to provide customers with exceptional results. Whether the 
              customer needs just a logo or entire system design, DNA's graphic designer team
              will deliver design beyond the client's expectations.
            </p>
            <DesignServices />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GraphicDesign;
