import React, { useEffect } from 'react';
import Aos from 'aos';

import { Container, Row, Col } from 'react-bootstrap';
import classes from './Contact.module.css';

import facebookBadge from '../../../../assets/badges/contact/facebook.png';
import gmailBadge from '../../../../assets/badges/contact/gmail.png';
import instagramBadge from '../../../../assets/badges/contact/instagram.png';
import mainLogo from '../../../../assets/dna-code-symbol.png';
import logoText from '../../../../assets/dna-code-white-crop.png';

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
       <div className={classes.Wrapper} >
            <Container fluid >
                <Row md='3'>
                    <Col md='true'> 
                    <h3 className={classes.TitleBadges}>DNA &#60;code&#62; &copy; 2021</h3> 
                        <Row className={classes.LogoWrapper}>
                            <Col md='auto'>
                                <img className={classes.FooterLogo} src={mainLogo} alt="Logo"/>
                            </Col>
                            <Col>
                                <img className={classes.FooterLogo} src={logoText} alt="LogoText"/>
                            </Col>
                        </Row>
                    </Col>


                    <Col>
                    <h3 className={classes.TitleBadges} >Useful Links</h3>
                    <Row md='true' className={classes.FooterNav}>
                        <Col md='auto'>
                        <ul className={classes.FooterNavItem}>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                        </Col>
                        <Col>
                        <ul className={classes.FooterNavItem}>
                            <li>
                                <a href="/portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/careers">Careers</a>
                            </li>
                        </ul>
                        </Col>
                    </Row>
                        
                    
                    </Col>
                    

                    <Col xs='3'>
                    <h3 className={classes.TitleBadges}>Follow us</h3>
                        <Row  className={classes.TitleBadgesItem}>
                                {
                                contact_badges.map((contact, index) => {
                                    return(
                                        <Row key={index}>
                                            <div className={classes.Badge}>
                                                <a href={contact.url}>
                                                <img src={contact.badge} alt="..."/>
                                                </a>
                                            </div>    
                                        </Row>
                                    )
                                })
                                }
                        </Row>
                    </Col>
                </Row>
                
            </Container>
           
       </div>
    )
}

export default Contact;