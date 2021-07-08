import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return(
            <a className={classes.Anchor} href='/'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            <button className={classes.Button} type={props.buttonType}>
                {props.children}
            </button>
            </a>
    )
}

export default Button;
