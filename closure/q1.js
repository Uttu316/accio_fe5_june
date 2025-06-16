function preSum(num) {
  console.log("Presum start");
  let p = 3;
  function sum(x) {
    console.log("Sum Start");
    var y = 2;

    console.log("Sum end");
    return function () {
      console.log("add start");
      console.log(x + y + p);
      console.log("add end");
    };
  }

  console.log("sum declared");
  return sum(num);
}

console.log("Code start");
const add = preSum(6);
console.log("Presum end");
add();
