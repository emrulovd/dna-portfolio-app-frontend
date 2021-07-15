import { Container, Row } from 'react-bootstrap'; 

import classes from './Footer.module.css';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterNav from './FooterNav/FooterNav';
import FooterLinks from './FooterLinks/FooterLinks';

const Footer = () => {
    return(
        <div className={classes.Wrapper}>
            <Container fluid >
                <Row md='3'>
                    <FooterLogo/>
                    <FooterNav/>
                    <FooterLinks/>
                </Row>
            </Container>
        </div>
    )
}


export default Footer;