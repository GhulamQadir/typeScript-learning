// CONCURRENCY(allows us to manage multiple tasks at once)==>(callbacks,promises, async-await)

// // CONECURRENCY STEP:1 (acieving concurrency using callbacks)
// let washing = (washCallBack: () => void) => {
//   console.log("Washing started");
//   setTimeout(() => {
//     console.log("Washing done!");
//     washCallBack();
//   }, 5000);
// };

// let soaking = (soakCallBack: () => void) => {
//   console.log("Soaking started");
//   setTimeout(() => {
//     console.log("Soaking done!");
//     soakCallBack();
//   }, 3000);
// };

// let drying = () => {
//     console.log("Drying started")
//     setTimeout(() => {
//         console.log("Drying done!")
//     }, 2000);
// }

// washing(() => {
//     soaking(() => {
//         drying()
//     })
// })

// --------------------------------------------------------------------------------------------------------------

// // Step 2: achieving concurrency using promise

// let washing = () => {
//   console.log("Washing started");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Washing done!");
//     }, 5000);
//   });
// };

// let soaking = () => {
//   console.log("Soaking started");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Soaking done!");
//     }, 3000);
//   });
// };

// let drying = () => {
//   console.log("Drying started");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Drying done!");
//     }, 2000);
//   });
// };

// washing()
//   .then((value) => {
//     console.log(value);
//     return soaking();
//   })
//   .then((value) => {
//     console.log(value);
//     return drying();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// --------------------------------------------------------------------------------------------

// Step 3: achieving concurrency using async await
function washing() {
  console.log("Washing started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("washing done!");
    }, 5000);
  });
}

function soaking() {
  console.log("Soaking started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("some fault in machine!!!");
    }, 3000);
  });
}

function drying() {
  console.log("Drying started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("drying done!");
    }, 2000);
  });
}

let washingMachine = async () => {
  try {
    let washingResult = await washing();
    console.log(washingResult);
    let soakingResult = await soaking();
    console.log(soakingResult);
    let dryingResult = await drying();
    console.log(dryingResult);
  } catch (error) {
    console.log("error caught=>> ", error);
  } finally {
    console.log("I run everytime no matter what !!");
  }
};
washingMachine();
