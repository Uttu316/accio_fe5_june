console.log("A");

const p = new Promise((resolve, reject) => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
    resolve("Done"); //async
    console.log("D");
  }, 3000);

  console.log("E");
});

console.log("F");

p.then((value) => {
  //async
  console.log(value);
}).catch((err) => {
  //async
  console.log(err);
});

console.log("G");
