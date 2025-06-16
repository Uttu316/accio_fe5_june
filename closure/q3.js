function multiplier(intial) {
  let x = intial;
  return function (y) {
    let x = 6;
    let ans = x * y;
    x = ans;
    return ans;
  };
}

let mul = multiplier(2);

let value = mul(5); //10
let value2 = mul(3); //6
let value3 = mul(4); //6

console.log(value, value2, value3);
