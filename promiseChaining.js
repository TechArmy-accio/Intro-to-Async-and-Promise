// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 4000); // (*)
// })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 1
//     return result * 2; // 2  // new Promise(()=>{resolve(})
//   })
//   .then(function (result) {
//     // (***)

//     console.log(result); // 2
//     return result * 2; // 4 // Promise.resolve(4)
//   })
//   .then(function (result) {
//     console.log(result); // 4
//     return result * 2; // 8 // Promise.resolve(8)
//   });

//   new Promise(( resolve, reject)=>{
//       reject("Hello Error")
//   })

//   .then(x => console.log(x))
//     .catch(y => console.log(y))




let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 4000);
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2; // 2
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function(result) {
    console.log(result); // 2
    
  })




//   let str = "Hello World"


//   str.split(" ").map((x)=>{console.log(x)})


//   "Hello World".split(" ").map((x)=>{console.log(x)})