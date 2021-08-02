import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import Accordion from '../../../../UI/Accordion/Accordion';


const WebSoftware = () => {
    const web_softwares = [
        {
          title: "Frontend",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
        {
          title: "Backend",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
        {
          title: "QA & Testing",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
      ];
    return(
        <Fragment>
        <Row>
          {web_softwares.map((software, index) => {
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

export default WebSoftware;