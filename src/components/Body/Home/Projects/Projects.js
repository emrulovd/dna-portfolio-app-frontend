import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'; 
import classes from './Projects.module.css'

const Projects = () => {
    return(
        <div className={classes.Wrapper}>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Projects</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;