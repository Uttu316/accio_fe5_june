function api() {
  return new Promise((res, rej) => {
    const num = parseInt(prompt("Eneter number"));
    if (num % 2 == 0) {
      res("Even");
    } else {
      rej("Odd");
    }
  });
}

const getNum = async () => {
  console.log("Start Checking");

  const value = await api(); // till the promise not getting settle

  console.log(value);
  console.log("End"); //  rest of the function has to wait
};

getNum();
console.log("Kepp Runing");
