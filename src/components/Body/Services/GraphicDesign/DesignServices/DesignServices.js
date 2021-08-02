import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import classes from "./DesignServices.module.css";

import Accordion from "../../../../UI/Accordion/Accordion";

const DesignServices = () => {
  const designs = [
    {
      title: "UI/UX",
      content:
        "UI/UX is very good for every business please give us money so we can buy ferrari",
    },
    {
      title: "Web Design",
      content:
        "ERP is very good for every business please give us money so we can buy ferrari",
    },
    {
      title: "Mobile Design",
      content:
        "ERP is very good for every business please give us money so we can buy ferrari",
    },
  ];
  return (
    <Fragment>
      <Row>
        {designs.map((design, index) => {
          return (
            <Col key={index}>
              <Accordion label={design.title} content={design.content} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default DesignServices;
