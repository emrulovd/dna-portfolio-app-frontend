import React, { Fragment, useRef } from 'react';

import logo from '../../../assets/dna-code-white.png';
import classes from './Authenticate.module.css';

import Card from '../../UI/Card/Card';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const Authenticate = () => {
    const usernameRef = useRef();
    return(
        <Fragment>
            <div className={classes.Wrapper}>
                <Card>
                    <img className={classes.Logo} src={logo} alt=".."/>
                    <Input elementType="input" name="username" reff={usernameRef} label="username" type="text" />
                    <Input elementType="input" name="password" reff={usernameRef} label="password" type="password"/>
                    <Button>Login</Button>
                </Card>
            </div>
        </Fragment>
    )
}

export default Authenticate;