import { Fragment } from "react";
import { Container, Row } from "react-bootstrap";


import classes from "./AboutGoals.module.css";
import { objectives } from "./Content";

const AboutGoals = () => {
  return (
    <div className={classes.Wrapper}>
      <Container fluid>
        <h1 className={classes.Title}>
        <span className={classes.TextDecortion}>&lt;h1</span>
          Why choose Us?
        <span className={classes.TextDecortion}>/&gt;</span>
        </h1>
        {objectives.map((objective, index) => {
          return (
            <Fragment>
              {index % 2 === 1 ? (
                <Row>
                  <div className={classes.ColLeft}>
                    <img
                      className={classes.BadgeLeft}
                      src={objective.image}
                      alt="..."
                    />
                  </div>
                  <div className={classes.ColRight}>
                    <p className={classes.TextLeft}>{objective.text}</p>
                  </div>
                </Row>
              ) : (
                <Row>
                  <div className={classes.ColLeft2}>
                    <p className={classes.TextRight}>{objective.text}</p>
                  </div>
                  <div className={classes.ColRight2}>
                    <img
                      className={classes.BadgeRight}
                      src={objective.image}
                      alt="..."
                    />
                  </div>
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
