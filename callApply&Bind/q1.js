const obj = {
  name: "ABC",
  getName: function (x, y) {
    console.log(this);
    console.log(this.name, x + y);
  }
};
const user = {
  name: "lokesh",
  age: 21
};
const car = {
  name: "Mahindra Xuv700"
};

// obj.getName.call(user,5,6)
// obj.getName.call(car,12,11)

// obj.getName.apply(user,[5,6])
// obj.getName.apply(car,[12,11])

const printName = obj.getName.bind(user); // bind function helps to bind the this value while copying the function

printName(); // this=window
obj.getName(2, 3); // this=obj
