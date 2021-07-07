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
                ref={props.inputRef}
                required/>;
                break;
        default:
            inputElement = <input
            className={classes.InputElement}
            type={props.inputType}
            name={props.name}
            ref={props.inputRef}
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