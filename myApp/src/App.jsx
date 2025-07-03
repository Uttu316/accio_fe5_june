import "./App.css";
import Practice from "./pages/practice";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Details from "./pages/details";
import { Route } from "react-router";
import CoursePage from "./pages/course";
import NotFoundPage from "./pages/NotfoundPage";

import Router from "./router";
import CartProvider from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="*" element={<NotFoundPage />} />
      </Router>
    </CartProvider>
  );
};

export default App;
