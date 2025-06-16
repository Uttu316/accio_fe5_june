// const getData = ()=>{
//     return new Promise((res,rej)=>{
//         res("HHello")
//         rej('OOps')
//     })
// }

const getData = async () => {
  throw "Oops";
  // return "Hello" // resolve promise value
};

getData()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
