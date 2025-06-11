function abc(callback) {
  let x = 2;

  let y = callback(x, x + 2);

  return y;
}

function sum(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

const l = abc(sum);

const p = abc(mul);

console.log(l, p);
