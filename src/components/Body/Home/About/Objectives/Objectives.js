import React from "react";

import { Row, Col } from "react-bootstrap";
import classes from "./Objectives.module.css";

import fastBadge from "../../../../../assets/badges/fast.png";
import accuracyBadge from "../../../../../assets/badges/accuracy.png";
import highQualityBadge from "../../../../../assets/badges/highquality.png";
import innovativeBadge from "../../../../../assets/badges/innovative.png";

import Scramble from "../../../../../helpers/animation/Scramble";

const Objectives = () => {
  const images = [
    { image: innovativeBadge },
    { image: accuracyBadge },
    { image: fastBadge },
    { image: highQualityBadge },
  ];
  return (
    <div className={classes.Wrapper}>
      <Row>
        <Col>
          <h3 className={classes.Title}>
            <span className={classes.TextDecortion}>&lt;h3</span>
            <Scramble start={true} text="Goals" />
            <span className={classes.TextDecortion}>/&gt;</span>
          </h3>
        </Col>
      </Row>
      <Row>
        {images.map((el, index) => {
          return (
            <Col className={classes.Column} key={index}>
              <div className={classes.Border}>
                <div className={classes.Layer}>
                  <a href='/about'>
                  <img className={classes.Badge} src={el.image} alt="..." />
                  </a>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Objectives;
