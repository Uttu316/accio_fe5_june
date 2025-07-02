import ChatWidget from "../../components/chatWidget";
import ProductList from "../../components/productList";

import { useState } from "react";
import styles from "./home.module.css";
import ProductHeader from "../../components/productHeader";

const Home = ({ cartItems, setCartItems }) => {
  console.log("Home");

  return (
    <div>
      <ProductHeader cartItems={cartItems} />

      <section className={styles.section}>
        <h1 className={styles.title}>Welcome to AI World</h1>

        <ProductList cartItems={cartItems} setCartItems={setCartItems} />
      </section>
      <ChatWidget />
    </div>
  );
};

export default Home;
