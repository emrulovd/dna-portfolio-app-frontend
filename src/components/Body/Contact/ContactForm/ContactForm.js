import React, { useState } from "react";
import axios from "axios";

import Card from "../../../UI/Card/Card";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import Modal from "../../../UI/Modal/Modal";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [modal, setModal] = useState();

  const resetForm = () => {
    setEnteredName("");
    setEnteredPhone("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  const sendMessageFormHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.trim().length === 0 &&
      enteredPhone.trim().length === 0 &&
      enteredEmail.trim().length === 0 &&
      enteredMessage.trim().length === 0
    ) {
      setModal({
        title: "Invalid input",
        message: "Please enter a valid values (non-empty values).",
      });
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
        setModal({
          title: "Bad Request",
          message:
            "Please try again later ( for more information contact our team)",
        });
        console.log(error);
      });
    console.log(contactForm);
    setModal({
      title: "Success",
      message:
        "You successfully contacted us. We are going to respond to your message as soon as we can.",
    });
    resetForm();
  };

  const modalHandler = () => {
    setModal(null);
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
    <div className={classes.Wrapper}>
      {modal && (
        <Modal
          title={modal.title}
          message={modal.message}
          onConfirm={modalHandler}
        />
      )}
      {/* <Card className={classes.Card}> */}
        <div className={classes.Details}>
          <h3>Contact</h3>
          <p className={classes.PhoneD}>+359 89 678 4966</p>
          <p className={classes.Phone}>+359 87 699 9819</p>
          <p>dna.code.dev@gmail.com</p>
        </div>
        <form onSubmit={sendMessageFormHandler}>
          <div className={classes.Row}>
            <div className={classes.Col}>
              <Input
                elementType="input"
                name="name"
                label="Your Name"
                inputType="text"
                className={classes.Input}
                value={enteredName}
                change={enteredNameHandler}
              />
            </div>
            <div className={classes.Col}>
              <Input
                elementType="input"
                name="number"
                label="Your Telephone"
                inputType="text"
                className={classes.Input}
                value={enteredPhone}
                change={enteredPhoneHandler}
              />
            </div>
          </div>
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
            className={classes.Input}
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
      {/* </Card> */}
    </div>
  );
};

export default ContactForm;
