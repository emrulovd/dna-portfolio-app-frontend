import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";


import Accordion from "../../../../UI/Accordion/Accordion";

const BusinessSoftware = () => {
  const softwares = [
    {
      title: "ERP",
      content:
        "ERP is very good for every business please give us money so we can buy ferrari",
    },
    {
      title: "CRM",
      content:
        "ERP is very good for every business please give us money so we can buy ferrari",
    },
    {
      title: "Storage",
      content:
        "ERP is very good for every business please give us money so we can buy ferrari",
    },
  ];
  return (
    <Fragment>
      <Row>
        {softwares.map((software, index) => {
          return (
            <Col key={index}>
              <Accordion label={software.title} content={software.content} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default BusinessSoftware;
