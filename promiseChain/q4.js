// return a promise from a function
function getData() {
  return new Promise((res, rej) => {
    // res("Hello") // resolved promise
    rej("OOps"); // reject promise
  });
}

// return a promise object from a function
function getName() {
  // return Promise.resolve("Lokesh")
  return Promise.reject("Oho");
}

getData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

getName()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
