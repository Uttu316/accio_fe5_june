function greet(message) {
  console.log(message + ", " + this.name);
}
const person = { name: "Alice" };
greet.call(person, "Hello");

function sum(a, b) {
  console.log(this.label + ": " + (a + b));
}
const calculator = { label: "Total" };
sum.apply(calculator, [5, 10]);

function sayHi() {
  console.log("Hi, " + this.name);
}
const user = { name: "Bob" };
const sayHiToBob = sayHi.bind(user);

setTimeout(() => {
  sayHiToBob();
}, 3000);
