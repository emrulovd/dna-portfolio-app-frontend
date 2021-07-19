import { Fragment } from 'react';

import classes from './Spinner.module.css';
import logo from '../../../assets/dna-black-logo-symbol.png'

const Spinner = () => {
    return(
        <Fragment>
            <img className={classes.SpinnerLogo} src={logo} alt='...'/>
            <div className={classes.loader}></div>
        </Fragment>
        )
}

export default Spinner;