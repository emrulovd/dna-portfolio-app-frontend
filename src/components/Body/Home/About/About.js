import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';
import classes from './About.module.css';
import logo from '../../../../assets/dna-code-white.png'

import Objectives from './Objectives/Objectives';

const About = () => {
    return(
        <div className={classes.Wrapper}>
            <Container>
                <Row>
                    <Col sm={4} >
                        <img className={classes.Logo} src={logo} alt='...'/>
                    </Col>
                    <Col sm={7}>
                        <div className={classes.Text}>
                            <h3>About</h3>
                            <p>                                
                                Establish a communication structure
                                Decide what resources you’re ready to dedicate to collaboration
                                with a vendor, and establish clear communication flows
                                regarding different aspects of the project.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Objectives/>
                </Row>
            </Container>
        </div>
    )
}

export default About;