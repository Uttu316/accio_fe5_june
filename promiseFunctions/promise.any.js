const p1 = new Promise((res) => {
  setTimeout(() => {
    res("A");
  }, 3000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("B");
  }, 100);
});

const p3 = new Promise((res) => {
  setTimeout(() => {
    res("C");
  }, 1500);
});

const p = Promise.any([p1, p2, p3]);

p.then((values) => {
  console.log(values);
}).catch((err) => {
  console.log("error", err);
});
