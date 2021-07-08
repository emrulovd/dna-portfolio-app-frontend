import React from 'react'; 

import classes from './Input.module.css';

const Input = props => {
    let inputElement = null; 

    switch( props.elementType ){
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                type={props.inputType}
                name={props.name}
                value={props.value}
                onChange={props.change}
                required/>;
                break;
        default:
            inputElement = <input
            className={classes.InputElement}
            type={props.inputType}
            name={props.name}
            value={props.value}
            onChange={props.change}
            required/>;
            break;
    }

    return(
        <div className={classes.Input}>
            {inputElement}
            <span className={classes.Label}>{props.label}</span>
            <span className={classes.Line}></span>
        </div> 
    )
}

export default Input;