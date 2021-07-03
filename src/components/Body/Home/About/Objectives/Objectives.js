import React from 'react';

import { Row, Col } from 'react-bootstrap';
import classes from './Objectives.module.css';

import fastBadge from '../../../../../assets/badges/fast.png';
import highQualityBadge from '../../../../../assets/badges/highquality.png';
import innovativeBadge from '../../../../../assets/badges/innovative.png';

const Objectives = () => {
    const images = [
        {image: fastBadge},
        {image: innovativeBadge},
        {image: highQualityBadge},
    ]
    return(
        <div className={classes.Wrapper}>   
            <Row>
                <Col>
                    <h3 className={classes.Title}> Goals</h3>
                </Col>
            </Row>
            <Row>
                {
                    images.map((el, index) => {
                        return(
                            <Col key={index}>
                                <div className={classes.Border}>
                                    <img className={classes.Badge} src={el.image} alt="..."/>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Objectives;