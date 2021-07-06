import * as React from "react";
import { useState } from "react";
import axios from "axios";
const ContactUs = ({ contactUsRef }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: { ok: "", msg: "Send Message" },
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({
      submitting: true,
      status: { ok: "", msg: "Send Message" },
    });
    axios({
      method: "post",
      url: "https://getform.io/f/32962f39-f1e4-4b93-a090-22b815fa548a",
      data: new FormData(form),
    })
      .then((r) => {
        console.log(new FormData(form));
        handleServerResponse(true, "Message was sent!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <section ref={contactUsRef} className="contact-us flex-column">
      <form
        onSubmit={handleSubmit}
        className="contact-us__form"
        method="POST"
        action="https://getform.io/f/32962f39-f1e4-4b93-a090-22b815fa548a"
      >
        <h2 className="contact-us__heading heading">Get in touch</h2>

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
            {serverState.status.msg}
          </button>
        </div>
      </form>
      <div className="contact-us__imageWrapper"></div>
    </section>
  );
};
export default ContactUs;
