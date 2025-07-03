import { useCallback, useContext, useMemo } from "react";
import styles from "./productCard.module.css";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { handleAddToCart, handleremovefromCart, isAlreadyInCart } =
    useContext(CartContext);

  const isInCart = isAlreadyInCart(item);

  const onAdd = (e) => {
    handleAddToCart(item);
  };
  const onRemove = (e) => {
    handleremovefromCart(item);
  };

  const onCardClick = () => {
    navigate(`/details/${item.id}`); //details/1
  };
  return (
    <div className={styles.card} onClick={onCardClick}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <p className={styles.title}>{item.title}</p>
      <p className={styles.price}>${item.price.toFixed(2)}</p>
      <p className={styles.description}>{item.description}</p>
      {!isInCart && (
        <button className={styles.button} onClick={onAdd}>
          Add to Cart
        </button>
      )}
      {isInCart && (
        <button
          className={`${styles.button} ${styles.remove}`}
          onClick={onRemove}
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
