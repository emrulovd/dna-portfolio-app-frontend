import React, { Fragment, useRef } from 'react';

import logoBlack from '../../../assets/dna-black-logo-symbol.png';
import classes from './Authenticate.module.css';

import Card from '../../UI/Card/Card';
import Input from '../../UI/Input/Input';

const Authenticate = () => {
    const usernameRef = useRef();
    return(
        <Fragment>
            <img className={classes.Logo} src={logoBlack} alt=".."/>
                <Card className={classes.CardDesign}>
                    <h3 className={classes.Title}>Login</h3>
                    <Input elementType="input" name="username" ref={usernameRef} label="username" type="text"/>
                    <Input elementType="input" name="password" ref={usernameRef} label="password" type="password"/>
                </Card>
        </Fragment>
    )
}

export default Authenticate;