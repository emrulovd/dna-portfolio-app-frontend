import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import Accordion from '../../../../UI/Accordion/Accordion';

const MobileSoftware = () => {
    const mobile_softwares = [
        {
          title: "iOS",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
        {
          title: "Android",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
        {
          title: "Cross-site",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
      ];
    return(
        <Fragment>
        <Row>
          {mobile_softwares.map((software, index) => {
            return (
              <Col key={index}>
                <Accordion label={software.title} content={software.content} />
              </Col>
            );
          })}
        </Row>
      </Fragment>
    );
}

export default MobileSoftware;