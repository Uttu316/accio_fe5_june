import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1>Hello</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#career">Career</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <hr />
      <section id="about" className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        cupiditate earum quidem culpa doloribus. Ab expedita et odio nesciunt
        quae atque eaque debitis, corrupti sequi unde rem error aut distinctio!
      </section>
      <hr />
      <section id="skills" className="container">
        <ul>
          <li>React</li>
          <li>Js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
      <hr />
      <section id="career" className="container ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        cupiditate earum quidem culpa doloribus. Ab expedita et odio nesciunt
        quae atque eaque debitis, corrupti sequi unde rem error aut distinctio!
      </section>
      <hr />
      <section id="contact" className="container">
        <h2>Contact Me</h2>
        <form>
          <textarea placeholder="Enter your message..."></textarea>
          <button>Send</button>
        </form>
      </section>
      <hr />
      <footer>Made with love by Accio</footer>
    </div>
  );
}

export default App;
