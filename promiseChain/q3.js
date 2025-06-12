const myPromise = new Promise((res) => {
  res(2);
});

myPromise
  .then((value) => value + 1)
  .then((value) => value * 2)
  .then((value) => {
    throw value + 5;
  })
  .then((value) => value - 1)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error("Error", err);
  });
