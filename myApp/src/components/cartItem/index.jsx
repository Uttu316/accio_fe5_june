import React from "react";
import styles from "./cartItem.module.css";

const CartItem = ({ product, onRemove }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
      </div>
      <button className={styles.removeBtn} onClick={() => onRemove(product)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
