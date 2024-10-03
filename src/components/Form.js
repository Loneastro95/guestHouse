import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      html_message: message,
    };

    emailjs
      .send("service_xxfd13c", "template_qwffkwf", templateParams, "Gy8lOEiYSz7k8wPUQ")
      .then(
        (result) => {
          console.log("Email successfully sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input
        type="text"
        value={name}
        name="from_name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        value={email}
        name="from_email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Subject</label>
      <input
        type="text"
        value={subject}
        name="subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <label>Message</label>
      <textarea
        value={message}
        name="html_message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
