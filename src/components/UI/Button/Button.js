import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return(
            <button className={classes.Button} type={props.type}>
                <a href="/auth/login">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {props.children}
                </a>
            </button>
    )
}

export default Button;
