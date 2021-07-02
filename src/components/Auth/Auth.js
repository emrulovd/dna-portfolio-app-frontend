import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Auth.module.css';
import Authenticate from './Authenticate/Authenticate';


const Auth = () => {
    return(
        <Fragment>
            <div className={classes.Wrapper}>
            <Container>
                <Row>
                    <Col>
                        <Authenticate/>
                    </Col>
                </Row>
            </Container>
            </div>
        </Fragment>
    )
}

export default Auth;