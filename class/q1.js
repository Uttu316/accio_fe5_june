class A {
  constructor() {
    //instance
    this.getAge = function () {
      console.log(12);
    };
  }

  //prototype
  getName() {
    console.log("Hello");
  }

  //static
  static getCity() {
    console.log("Agra");
  }
}

const a = new A();
const b = new A();

a.getName();
b.getName();
a.getAge();
b.getAge();

// A.getCity()
console.log(a.getName === b.getName);
console.log(a.getAge === b.getAge);
