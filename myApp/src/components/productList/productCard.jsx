import { useCallback, useMemo } from "react";
import styles from "./productCard.module.css";
import { useNavigate } from "react-router";

const ProductCard = ({ item, cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const handleAddToCart = useCallback(() => {
    setCartItems((prevItems) => [...prevItems, item]);
  }, []);
  const handleremovefromCart = useCallback(() => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  }, []);

  const isAlreadyInCart = useMemo(
    () => (cartItems || []).find((i) => i.id == item.id),
    [cartItems]
  );

  const onCardClick = () => {
    navigate(`/details/${item.id}`); //details/1
  };
  return (
    <div className={styles.card} onClick={onCardClick}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <p className={styles.title}>{item.title}</p>
      <p className={styles.price}>${item.price.toFixed(2)}</p>
      <p className={styles.description}>{item.description}</p>
      {!isAlreadyInCart && (
        <button className={styles.button} onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
      {isAlreadyInCart && (
        <button
          className={`${styles.button} ${styles.remove}`}
          onClick={handleremovefromCart}
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
