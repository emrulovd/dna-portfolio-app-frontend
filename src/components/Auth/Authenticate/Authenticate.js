import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";

import { login } from '../../../store/actions/auth';

import logo from "../../../assets/dna-code-white.png";
import classes from "./Authenticate.module.css";

import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

const Authenticate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [error, setError] = useState();


  const resetForm = () => {
    setEnteredUsername('');
    setEnteredPassword('');
  }

  const authenticateHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim() === '' && enteredPassword.trim() === ''){
        setError({
          title: "Invalid input",
          message: "Please enter a valid values (non-empty values).",
        })
        return;
    }
    const authData = {
      username: enteredUsername,
      password: enteredPassword
    }
    dispatch(login(authData));
    history.push('/admin');
    resetForm();
  };

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div className={classes.Wrapper}>
       {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.Card}>
        <img className={classes.Logo} src={logo} alt=".." />
        <form onSubmit={authenticateHandler}>
          <Input
            elementType="input"
            name="username"
            label="username"
            inputType="text"
            value={enteredUsername}
            change={enteredUsernameHandler}
          />
          <Input
            elementType="input"
            name="password"
            label="password"
            inputType="password"
            value={enteredPassword}
            change={enteredPasswordHandler}
          />
          <Button buttonType="submit" className={classes.Button}>Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Authenticate;
