import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import classes from './Objectives.module.css';

const Objectives = () => {
    return(
        <div className={classes.Wrapper}>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Objectives</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Objectives;