// write a polyfill for forEach function

//steps

// 1: Check if forEachis present or not in prototpe of Array
// 2: if not then add forEach in prototype of Array
// 3: Assign a function to forEach
// 4: take a callback function in parameter
// 5: access the array using this
// 6: loop the array
// 7: call the callback function on every iteration
// 8: pass item, index and array for each iteration in the callback as arguments

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;

    for (let i = 0; i < array.length; i++) {
      callback.call(thisArg, array[i], i, array);
    }
  };
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (item, index, array) {
  console.log(index, item, array);
});

let arr = [2, 3, 4];

arr.forEach((item, index, array) => {
  console.log(item + index);
});
