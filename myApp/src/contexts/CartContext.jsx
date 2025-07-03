import { createContext, useCallback, useMemo, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = useCallback((item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  }, []);
  const handleremovefromCart = useCallback((item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  }, []);

  const isAlreadyInCart = useCallback(
    (item) => {
      let isInCart = (cartItems || []).find((i) => i.id == item.id);

      return isInCart;
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleremovefromCart,
        isAlreadyInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
