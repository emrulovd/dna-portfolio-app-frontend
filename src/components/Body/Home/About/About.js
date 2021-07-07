import React, { useEffect } from 'react';
import Aos from 'aos';

import { Container, Row, Col} from 'react-bootstrap';
import classes from './About.module.css';
import video from '../../../../assets/dna-logo-animation.mp4';

import Objectives from './Objectives/Objectives';

const About = () => {

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, []);

    return(
        <div className={classes.Wrapper}>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div data-aos="zoom-in">
                            <video className={classes.Logo} autoPlay muted loop src={video} type="video/mp4"></video>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className={classes.Text} data-aos="zoom-in">
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
                <Row data-aos="zoom-in">
                    <Objectives/>
                </Row>
            </Container>
        </div>
    )
}

export default About;