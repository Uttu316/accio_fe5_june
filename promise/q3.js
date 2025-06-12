console.log("A");
const getData = () => {
  console.log("B");

  return new Promise((resolve, reject) => {
    console.log("C");
    reject("OOps");
    console.log("D");
  });
  console.log("E");
};

console.log("F");

getData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("G");
