import ChatWidget from "../../components/chatWidget";
import ProductList from "../../components/productList";

const Home = () => {
  return (
    <div>
      <header>
        <h2>Logo</h2>
        <nav>
          <a>About</a>
          <a>Contact us</a>
        </nav>
      </header>

      <section>
        <h1>Welcome to AI World</h1>
        <ProductList />
      </section>
      <ChatWidget />
    </div>
  );
};

export default Home;
