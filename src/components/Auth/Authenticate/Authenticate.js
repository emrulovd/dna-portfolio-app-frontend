import React, { useRef } from "react";

import logo from "../../../assets/dna-code-white.png";
import classes from "./Authenticate.module.css";

import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Authenticate = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const authenticateHandler = (event) => {
    console.log(event)
    event.preventDefault();
    console.log(usernameInputRef);
    console.log(passwordInputRef);
  };

  return (
    <div className={classes.Wrapper}>
      <Card>
        <img className={classes.Logo} src={logo} alt=".." />
        <form onSubmit={(event) => authenticateHandler(event)}>
          <Input
            elementType="input"
            name="username"
            reff={usernameInputRef}
            label="username"
            type="text"
          />
          <Input
            elementType="input"
            name="password"
            reff={passwordInputRef}
            label="password"
            type="password"
          />
          <Button type="submit" >Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Authenticate;
