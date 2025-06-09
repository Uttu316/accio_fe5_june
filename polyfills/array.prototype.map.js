// write a polyfill for map function

//steps

// 1: Check if map is present or not in prototpe of Array
// 2: if not then add forEach in prototype of Array
// 3: Assign a function to forEach
// 4: take a callback function in parameter
// 5: access the array using this
// 6: loop the array
// 7: call the callback function on every iteration
// 8: pass item, index and array for each iteration in the callback as arguments
// 9: accept the output of callback in a variable
// 10: push the output in a result array
// 11: return the result array after the loop

if (!Array.prototype.map) {
  let res = [];

  Array.prototype.map = function (callback) {
    for (let i = 0; i < this.length; i++) {
      let output = callback(this[i], i, this);

      res.push(output);
    }

    return res;
  };
}
