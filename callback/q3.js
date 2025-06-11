function getUserData(onSuccess, onFailure) {
  let name = prompt("Enter your name");
  setTimeout(() => {
    if (name === "lokesh") {
      onSuccess({
        name: "Lokesh Baviskar",
        id: "2112134",
        age: 21
      });
    } else {
      onFailure("User not Found");
    }
  }, 3000);
}
getUserData(
  (userData) => {
    const { name, id, age } = userData;
    console.log(name, age);
  },
  (error) => {
    console.log(error);
  }
);
