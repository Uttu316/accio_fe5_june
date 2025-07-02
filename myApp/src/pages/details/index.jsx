import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./details.module.css";
import ProductHeader from "../../components/productHeader";
import { useParams } from "react-router";
import { getProduct } from "../../services/getProduct";

const Details = ({ cartItems, setCartItems }) => {
  const [product, setProduct] = useState(null);
  const [apiStatus, setAPIStatus] = useState("loading");

  const { productId } = useParams();

  console.log({ productId });

  const fetchProduct = async () => {
    try {
      const data = await getProduct(productId);
      setProduct(data);
      setAPIStatus("done");
    } catch (e) {
      setAPIStatus("error");
    }
  };
  useEffect(() => {
    if (productId) {
      fetchProduct();
    } else {
      setAPIStatus("done");
    }
  }, [productId]);

  const isDone = apiStatus === "done";
  const isLoading = apiStatus === "loading";
  const isError = apiStatus === "error";
  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  const handleAddToCart = useCallback(() => {
    setCartItems((prevItems) => [...prevItems, product]);
  }, [product]);
  const handleremovefromCart = useCallback(() => {
    if (product) {
      setCartItems((prevItems) => prevItems.filter((i) => i.id !== product.id));
    }
  }, [product]);

  const isAlreadyInCart = useMemo(
    () => (product ? (cartItems || []).find((i) => i.id == product.id) : false),
    [cartItems, product]
  );
  return (
    <div>
      <ProductHeader cartItems={cartItems} />

      <div className={styles.container}>
        {noProduct && <h2>No Product Availble</h2>}
        {isLoading && <h2>Loading your product...</h2>}
        {isError && <h2>Something Went Wrong</h2>}
        {hasProduct && (
          <div className={styles.content}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.details}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.category}>
                <strong>Category:</strong> {product.category}
              </p>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>
                <strong>Price:</strong> {product.price} Rs.
              </p>
              <p className={styles.rating}>
                <strong>Rating:</strong> {product.rating.rate} / 5
              </p>
              {!isAlreadyInCart && (
                <button className={styles.cartBtn} onClick={handleAddToCart}>
                  Add to Cart
                </button>
              )}
              {isAlreadyInCart && (
                <button
                  className={`${styles.cartBtn} ${styles.remove}`}
                  onClick={handleremovefromCart}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
