const p = new Promise((resolve, reject) => {
  resolve(2);
});

p.then((v) => {
  console.log(v);
  return v + 2; // resolve(4)
})
  .then((v) => {
    console.log(v);
    return v + 2;
  })
  .then((v) => {
    console.log(v);
  });
