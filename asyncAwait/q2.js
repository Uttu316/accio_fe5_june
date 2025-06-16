console.log("A");

function api(num) {
  console.log("B");
  return new Promise((res, rej) => {
    console.log("C");
    setTimeout(() => {
      console.log("D");
      if (num % 2 == 0) {
        res("Even");
      } else {
        rej("Odd");
      }

      console.log("E");
    }, 3000);
    console.log("F");
  });
}

console.log("G");

const getResult = async (num) => {
  console.log("H");
  const res = await api(num);
  console.log("I");
  return res;
};

getResult(4).then((value) => {
  console.log(value);
});
console.log("J");
