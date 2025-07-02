import React, { useState } from "react";
import styles from "./cart.module.css";
import ProductHeader from "../../components/productHeader";
import CartItem from "../../components/cartItem";

const Cart = ({ cartItems, setCartItems }) => {
  // Example initial cart products

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((product) => product.id !== id));
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    setCartItems([]);
  };

  return (
    <div>
      <ProductHeader cartItems={cartItems} />

      <div className={styles.container}>
        <h2 className={styles.title}>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onRemove={handleRemove}
            />
          ))
        )}
        {!!cartItems.length && (
          <button className={styles.placeOrderBtn} onClick={handlePlaceOrder}>
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
