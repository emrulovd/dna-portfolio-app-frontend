import { Row, Col } from "react-bootstrap";
import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <Col>
      <h3 className={classes.TitleBadges}>Useful Links</h3>
      <Row md="true" className={classes.FooterNav}>
        <Col md="auto">
          <ul className={classes.FooterNavItem}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className={classes.FooterNavItem}>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
};

export default FooterNav;
