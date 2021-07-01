import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import classes from './Services.module.css';

const Services = () => {
    return(
        <div className={classes.Wrapper}>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Services</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services;