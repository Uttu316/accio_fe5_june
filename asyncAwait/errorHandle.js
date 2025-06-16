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
  try {
    console.log("H");
    const res = await api(num);
    console.log("I");
    return res;
  } catch (e) {
    console.log("Error", e);
    throw e;
  }
};

getResult(3)
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log("errror", e);
  });
console.log("J");
