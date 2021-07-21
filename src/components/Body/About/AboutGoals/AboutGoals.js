import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./AboutGoals.module.css";
import { objectives } from "./Content";

const AboutGoals = () => {
  return (
    <div className={classes.Wrapper}>
      <Container fluid>
          <h1 className={classes.Title}>Goals</h1>
        {objectives.map((objective, index) => {
          return (
            <Fragment>
              {index % 2 === 1 ? (
                <Row>
                  <Col md={7}>
                    <img className={classes.BadgeLeft} src={objective.image} alt="..." />
                  </Col>
                  <Col md={4}>
                    <p className={classes.TextLeft}>{objective.text}</p>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col  >
                    <p className={classes.TextRight}>{objective.text}</p>
                  </Col>
                  <Col md={7}>
                    <img className={classes.BadgeRight} src={objective.image} alt="..." />
                  </Col>
                </Row>
              )}
            </Fragment>
          );
        })}
      </Container>
    </div>
  );
};

export default AboutGoals;
