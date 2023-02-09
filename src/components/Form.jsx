import React, { useRef, useState } from "react";
import "./Form.css";

import emailjs from "@emailjs/browser";

const Form = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messsageInputRef = useRef();
  const form = useRef();

  const [success, setSuccess] = useState();

  let formData = {};
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_znh91sm",
        "template_5d7m9r8",
        form.current,
        "L44z88kRkpNXC22sl"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form.current, 22);
  };
  const err = () => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    sendEmail();
    setSuccess(true);
    err();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messsageInputRef.current.value;

    const validName = enteredName.trim().length < 2;
    const validEmail =
      enteredEmail.includes("@") && enteredEmail.trim().length < 5;
    const validSubject = enteredSubject.trim().length < 2;
    const validMessage = enteredMessage.trim().length < 3;

    formData = {
      name: validName,
      email: validEmail,
      subject: validSubject,
      message: validMessage,
    };
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    subjectInputRef.current.value = "";
    messsageInputRef.current.value = "";

    const enteredData = {
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };

    console.log(enteredData);
    console.log(11, form);
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={submitFormHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={nameInputRef}
          />
          {formData.name && <p className="error">Please enter a valid name!</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            ref={emailInputRef}
          />
          {formData.email && (
            <p className="error">Please enterd a valid email!</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            ref={subjectInputRef}
          />
          {formData.subject && (
            <p className="error">Please enterd a valid subject!</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            id="message"
            name="message"
            required
            ref={messsageInputRef}
            placeholder="Type your message here..."
          />
          {formData.message && (
            <p className="error">Please enter a valid mesage!</p>
          )}
        </div>
        <div className="btn-form">
          <button>Submit</button>
          {success && (
            <p className="err">
              Your message has been sent successfully! We will get in touch with
              you soon!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
