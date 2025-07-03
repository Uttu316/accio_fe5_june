import { Link, NavLink } from "react-router";
import styles from "./header.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const ProductHeader = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header className={styles.header}>
      <h2>
        <Link to="/">Logo</Link>
      </h2>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Contact us
        </NavLink>
        <NavLink to="/cart">
          Cart<span>{cartItems.length}</span>
        </NavLink>
      </nav>
    </header>
  );
};
export default ProductHeader;
