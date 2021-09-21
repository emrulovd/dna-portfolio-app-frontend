import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";


import Accordion from "../../../../UI/Accordion/Accordion";

const DesignServices = () => {
  const designs = [
    {
      title: "UI/UX",
      content:
        "Our UX/UI expertise will create and design powerful and intuitive digital experiences ensuring tailored to your business goals and objectives",
    },
    {
      title: "Web Design",
      content:
        "As being one of the crucial parts of websites, our graphic designer team following frameworks and established design standards will deliver user-friendly and client-focused solution.",
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
