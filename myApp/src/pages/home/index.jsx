import ChatWidget from "../../components/chatWidget";
import ProductList from "../../components/productList";

import { useState } from "react";
import styles from "./home.module.css";

const Home = () => {
  console.log("Home");
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <header className={styles.header}>
        <h2>Logo</h2>
        <nav className={styles.nav}>
          <a>About</a>
          <a>Contact us</a>
          <a>
            Cart<span>{cartItems.length}</span>
          </a>
        </nav>
      </header>

      <section className={styles.section}>
        <h1 className={styles.title}>Welcome to AI World</h1>

        <ProductList cartItems={cartItems} setCartItems={setCartItems} />
      </section>
      <ChatWidget />
    </div>
  );
};

export default Home;
