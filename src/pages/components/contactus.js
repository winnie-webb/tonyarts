import * as React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <form className="contact-us__form" method="POST">
        <h2 className="contact-us__heading">Get in touch</h2>

        <div className="inputWrapper">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" className="contact-us__formInput" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="email-or-number">Phone Number or Email</label>
          <input
            name="email-or-number"
            id="email-or-number"
            className="contact-us__formInput"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="contact-us__formInput"
          ></textarea>
        </div>
        <div className="form-btnWrapper">
          <button className="btn contact-us__formBtn" type="submit">
            Send Message
          </button>
        </div>
      </form>
      <div className="contact-us__imageWrapper"></div>
    </section>
  );
};
export default ContactUs;
