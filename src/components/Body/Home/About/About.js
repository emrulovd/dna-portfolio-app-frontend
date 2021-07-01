import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';
import classes from './About.module.css';

const About = () => {
    return(
        <div className={classes.Wrapper}>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>About</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;