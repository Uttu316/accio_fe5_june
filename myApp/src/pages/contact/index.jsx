import React from "react";
import styles from "./contact.module.css";
import contactImage from "../../assets/contact-image.svg";
import ProductHeader from "../../components/productHeader";

const Contact = ({ cartItems }) => {
  return (
    <div>
      <ProductHeader cartItems={cartItems} />

      <div className={styles.container}>
        <h1>Contact Us</h1>
        <img src={contactImage} alt="Contact Us" className={styles.image} />
        <p>
          We would love to hear from you! Whether you have questions, feedback,
          or need support, our team is here to help.
        </p>
        <p>
          You can reach us via email at{" "}
          <a href="mailto:support@example.com">support@example.com</a> or call
          us at (123) 456-7890.
        </p>
        <form className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
