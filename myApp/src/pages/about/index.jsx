import React from "react";
import styles from "./about.module.css";
import aboutImage from "../../assets/about-image.svg";
import ProductHeader from "../../components/productHeader";

const About = ({ cartItems }) => {
  return (
    <div>
      <ProductHeader cartItems={cartItems} />
      <div className={styles.container}>
        <h1>About Us</h1>
        <img src={aboutImage} alt="About Us" className={styles.image} />
        <p>
          Welcome to our company! We are dedicated to providing the best
          services to our customers. Our team is passionate about delivering
          quality and innovation in everything we do.
        </p>
        <p>
          Founded in 2020, we have grown rapidly and continue to expand our
          reach globally. Our mission is to empower individuals and businesses
          through cutting-edge technology and exceptional customer support.
        </p>
      </div>
    </div>
  );
};

export default About;
