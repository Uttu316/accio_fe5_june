import "./App.css";
import Practice from "./pages/practice";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Details from "./pages/details";
import { BrowserRouter, Route, Routes } from "react-router";
import CoursePage from "./pages/course";
import NotFoundPage from "./pages/NotfoundPage";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setCartItems={setCartItems} cartItems={cartItems} />}
        />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/about" element={<About cartItems={cartItems} />} />
        <Route path="/contact" element={<Contact cartItems={cartItems} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/details/:productId"
          element={
            <Details cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
