import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import Scramble from 'react-scramble';
import { Container, Row, Col} from 'react-bootstrap';
import classes from './About.module.css';
import video from '../../../../assets/dna-logo-animation.mp4';

import Objectives from './Objectives/Objectives';


const About = () => {

    const [scrambleText, setScrambleText] = useState(false);

    const onScramble = () => {
        if(window.scrollY >= 400 && window.scrollY <= 1000){
            setScrambleText(true)
        }else{
            setScrambleText('+1')
        }
    }

    window.addEventListener('scroll', onScramble);

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
                            <h3>
                            <Scramble
                            autoStart={scrambleText}
                            text='About'
                            speed="medium"
                            steps={[
                            {
                                roll: 15,
                                action: '+',
                                type: 'all',
                            },
                            {
                                action: '-',
                                type: 'forward',
                            },
                            ]}
                        />
                            </h3>

                            
                                
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