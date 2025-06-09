// at function is not present
if (!Array.prototype.at) {
  //add at function in the prototype of Array
  Array.prototype.at = function (index) {
    // implement same logic of at
    const array = this;
    return array[index];
  };
}

let arr = [1, 2, 3];

let o = arr.at(0);

console.log(o);
