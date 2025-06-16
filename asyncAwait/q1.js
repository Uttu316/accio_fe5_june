console.log("A");

const getData = async () => {
  console.log("B");
  setTimeout(() => {
    console.log("C");
  }, 1000);
  return "D";
};

console.log("E");

getData().then((value) => {
  console.log(value);
});

console.log("F");
