import React, { useEffect } from 'react';
import Aos from 'aos';

import { Container, Row, Col } from 'react-bootstrap';
import classes from './Contact.module.css';

import facebookBadge from '../../../../assets/badges/contact/facebook.png';
import gmailBadge from '../../../../assets/badges/contact/gmail.png';
import instagramBadge from '../../../../assets/badges/contact/instagram.png';


const Contact = () => {

    const contact_badges = [
        { badge: facebookBadge, url: 'https://www.facebook.com/dna.code.dev' },
        { badge: instagramBadge, url: 'https://www.instagram.com/dna.code.dev/' },
        { badge: gmailBadge, url: 'https://www.facebook.com/dna.code.dev' },
    ];

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return(
       <div className={classes.Wrapper}>
            <Container>
                <Row>
                    <Col>
                        <h3 className={classes.Title}>Contact</h3>
                    </Col>
                </Row>
                <Row>
                    {
                        contact_badges.map((contact, index) => {
                            return(
                                <Col md={1} key={index}>
                                    <div className={classes.Badge}>
                                        <a href={contact.url}>
                                            <img src={contact.badge} alt="..."/>
                                        </a>
                                    </div>    
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
       </div>
    )
}

export default Contact;