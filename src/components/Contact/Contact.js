import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Let's Connect!</h2>
      <form className="contact-form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Your Name:
          </label>
          <input className="form-input" type="text" id="name" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Your Email:
          </label>
          <input className="form-input" type="email" id="email" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea className="form-textarea" id="message" required />
        </div>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>

      <div className="overlay">
        <div className="overlay-message">
          <p className="overlay__paragraph">
            THIS PAGE IS CURRENTLY IN DEVELOPMENT
          </p>
          <p>(leveraging API)</p>
          <p className="overlay__paragraph">
            Please send me an email at dominickdustinjames@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
