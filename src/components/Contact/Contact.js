import React, { useState } from "react";
import "../Contact/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission and send the message
    // You'll need to implement this part using a server-side solution or a third-party service
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Let's Connect!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Your Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Your Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-textarea"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
