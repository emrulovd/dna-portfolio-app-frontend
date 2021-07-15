import { Row, Col } from "react-bootstrap";

import facebookBadge from "../../../../assets/badges/contact/facebook.png";
import gmailBadge from "../../../../assets/badges/contact/gmail.png";
import instagramBadge from "../../../../assets/badges/contact/instagram.png";
import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
  const contact_badges = [
    { badge: facebookBadge, url: "https://www.facebook.com/dna.code.dev" },
    { badge: instagramBadge, url: "https://www.instagram.com/dna.code.dev/" },
    { badge: gmailBadge, url: "https://www.facebook.com/dna.code.dev" },
  ];
  return (
    <Col xs="3">
      <h3 className={classes.TitleBadges}>Follow us</h3>
      <Row className={classes.TitleBadgesItem}>
        {contact_badges.map((contact, index) => {
          return (
            <Row key={index}>
              <div className={classes.Badge}>
                <a href={contact.url}>
                  <img src={contact.badge} alt="..." />
                </a>
              </div>
            </Row>
          );
        })}
      </Row>
    </Col>
  );
};

export default FooterLinks;
