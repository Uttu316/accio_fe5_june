import React, { useContext, useState } from "react";
import styles from "./cart.module.css";
import ProductHeader from "../../components/productHeader";
import CartItem from "../../components/cartItem";
import PageWrapper from "../../components/pageWrapper";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  // Example initial cart products

  const { handleremovefromCart, cartItems, setCartItems } =
    useContext(CartContext);

  const handleRemove = (product) => {
    handleremovefromCart(product);
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    setCartItems([]);
  };

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default Cart;
