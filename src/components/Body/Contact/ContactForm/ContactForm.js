import React, { useState } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import Card from "../../../UI/Card/Card";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

import logo from "../../../../assets/dna-code-white.png";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [error, setError] = useState(false);

  const resetForm = () => {
    setEnteredName("");
    setEnteredPhone("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  const sendMessageFormHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim() === "" &&
      enteredPhone.trim() === "" &&
      enteredEmail.trim() === "" &&
      enteredMessage.trim() === ""
    ) {
      setError(true);
      return;
    }
    const contactForm = {
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
      message: enteredMessage,
    };
    axios
      .post("http://localhost:8080/contact", contactForm)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError(true);

        console.log(error);
      });
    console.log(contactForm);
    resetForm();
  };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredPhoneHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const enteredMessageHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  return (
    <Card className={classes.Card}>
      <img className={classes.Logo} src={logo} alt="..." />
      <form onSubmit={sendMessageFormHandler}>
        <Row>
          <Col>
            <Input
              elementType="input"
              name="name"
              label="Your Name"
              inputType="text"
              className={classes.Input}
              value={enteredName}
              change={enteredNameHandler}
            />
          </Col>
          <Col>
            <Input
              elementType="input"
              name="number"
              label="Your Telephone Number"
              inputType="text"
              className={classes.Input}
              value={enteredPhone}
              change={enteredPhoneHandler}
            />
          </Col>
        </Row>
        <Input
          elementType="input"
          name="email"
          label="Your Email"
          inputType="email"
          className={classes.Input}
          value={enteredEmail}
          change={enteredEmailHandler}
        />
        <Input
          elementType="textarea"
          name="message"
          label="Your Message"
          inputType="text"
          value={enteredMessage}
          change={enteredMessageHandler}
        />
        <Button className={classes.Button} buttonType="submit">
          Send
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
