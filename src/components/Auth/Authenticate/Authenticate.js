import React, { Fragment } from 'react';

import logoBlack from '../../../assets/dna-black-logo-symbol.png';
import classes from './Authenticate.module.css';

import Card from '../../UI/Card/Card';

const Authenticate = () => {
    return(
        <Fragment>
            <img className={classes.Logo} src={logoBlack} alt=".."/>
                <Card className={classes.CardDesign}>
                    <h3 className={classes.Title}>Login</h3>
                </Card>
        </Fragment>
    )
}

export default Authenticate;