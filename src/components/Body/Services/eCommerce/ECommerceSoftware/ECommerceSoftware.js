import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import Accordion from '../../../../UI/Accordion/Accordion';

const ECommerceSoftware = () => {
    const ecommerce_softwares = [
        {
          title: "Wordpress",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
        {
          title: "Shopify",
          content:
            "ERP is very good for every business please give us money so we can buy ferrari",
        },
      ];
    return(
        <Fragment>
        <Row>
          {ecommerce_softwares.map((software, index) => {
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

export default ECommerceSoftware;