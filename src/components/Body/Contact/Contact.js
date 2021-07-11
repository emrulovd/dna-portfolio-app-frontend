import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return( 
        <Container>
            <Row>
                <Col>
                    <ContactForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;