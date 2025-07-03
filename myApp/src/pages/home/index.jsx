import ChatWidget from "../../components/chatWidget";
import ProductList from "../../components/productList";

import { useState } from "react";
import styles from "./home.module.css";
import ProductHeader from "../../components/productHeader";
import PageWrapper from "../../components/pageWrapper";

const Home = () => {
  console.log("Home");

  return (
    <PageWrapper>
      <section className={styles.section}>
        <h1 className={styles.title}>Welcome to AI World</h1>

        <ProductList />
      </section>
      <ChatWidget />
    </PageWrapper>
  );
};

export default Home;
