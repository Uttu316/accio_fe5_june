console.log("A");
const p = new Promise((resolve, reject) => {
  //sync callback
  const name = prompt("Enter name");
  setTimeout(() => {
    if (name === "akash") {
      resolve("Done"); // notify the then function of promise object
    } else {
      reject("Failed"); // notify the catch function of promise object
    }
  }, 5000);
});

console.log("C");

let x = 0;
for (let i = 0; i < 1000; i++) {
  // some sync task working
  x++;
}

console.log(x);

p.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});

console.log("Done Processing");
