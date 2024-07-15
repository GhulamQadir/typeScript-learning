// // RETURN MONEY EXAMPLE 1
// const returnMoney = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("money returned!!");
//   }, 5000);
// });
// returnMoney
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(() => {
//     console.log("unable to return money");
//   })
//   .finally(() => {
//     console.log("Promise completed");
//   });

// ---------------------------------------------------------------------------------------------------

// fetching data from api using promise (example 2)
let fetchDataPromise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.org/posts")
    .then((response) => {
      let data = response.json();
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

fetchDataPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("There was a problem ", error);
  });
