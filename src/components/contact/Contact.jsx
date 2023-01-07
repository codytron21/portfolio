import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
//     console.log(process.env.REACT_APP_PUBLIC_KEY);
    emailjs.sendForm(
      process.env.REACT_APP_YOUR_SERVICE_ID,
      process.env.REACT_APP_YOUR_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rohannak2057@gmail.com</h5>
            <a
              href="mailto:rohannak2057@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email me
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/rohan-kumar21/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on linkedin
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <a
              href="https:wa.me/+916202887597"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendMail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
