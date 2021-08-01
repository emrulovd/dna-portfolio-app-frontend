import { Container, Row, Col } from "react-bootstrap";

import classes from "./eCommerce.module.css";

import eCommerceBadge from "../../../../assets/services-icons/e-commerce.png";

const eCommerce = () => {
  return (
    <div className={classes.Wrapper}>
      <Container>
        <Row>
          <Col md={3}>
            <img className={classes.Badge} src={eCommerceBadge} alt="..." />
          </Col>
          <div className={classes.Line}></div>
          <Col>
            <p className={classes.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default eCommerce;
