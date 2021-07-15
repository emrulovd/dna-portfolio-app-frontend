import { Row, Col } from "react-bootstrap";

import logoSymbol from '../../../../assets/dna-code-symbol.png';
import logoText from '../../../../assets/dna-code-white-crop.png';
import classes from "./FooterLogo.module.css";

const FooterLogo = () => {
  return (
    <Col md="true">
      <h3 className={classes.TitleBadges}>DNA &#60;code&#62; &copy; 2021</h3>
      <Row className={classes.LogoWrapper}>
        <Col md="auto">
          <img className={classes.FooterLogo} src={logoSymbol} alt="Logo" />
        </Col>
        <Col>
          <img className={classes.FooterLogo} src={logoText} alt="LogoText" />
        </Col>
      </Row>
    </Col>
  );
};

export default FooterLogo;
