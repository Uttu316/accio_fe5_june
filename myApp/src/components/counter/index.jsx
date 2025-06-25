import { useState } from "react";
import "./counter.css";

let count = 1;
const Counter = () => {
  const [x, setX] = useState(0); // create state variable with intial value 0

  const onAdd = () => {
    console.log("Add Clicked");
    setX(x + 1); // new value of x
    console.log(x);
  };

  const onMinus = () => {
    console.log("Minus Clicked");
    setX((currX) => {
      return currX - 1;
    });
    setX((currX) => {
      return currX - 1;
    });
    setX((currX) => currX - 1); // retun new value of x in callback
    console.log(x);
  };

  console.log("Counter function runing", count);
  count++;

  return (
    <div className="counter">
      <h2>{x}</h2>
      <div className="counter_actions">
        <button onClick={onAdd}>Add</button>
        <button onClick={onMinus}>Minus</button>
      </div>
    </div>
  );
};

export default Counter;
