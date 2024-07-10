// // FOR LOOP
// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${i * 5}`);
// }
// -----------------------------------------------------------------------------------------
// // WHILE LOOP
// let trainArrivingTimeLeft = 15;
// let checkingTrainArrival = () => {
//   trainArrivingTimeLeft--;
//   if (trainArrivingTimeLeft > 0) {
//     return `Train arrives in ${trainArrivingTimeLeft}seconds`;
//   } else {
//     return "Train has arrived!";
//   }
// };
// while (trainArrivingTimeLeft > 0) {
//   let checkForTrain = checkingTrainArrival();
//   console.log(checkForTrain);
// }
// -----------------------------------------------------------------------------------------
// // D0 WHILE LOOP
// let result: string;
// do {
//   let tossVal:number = parseFloat(Math.random().toFixed(1));
//   result = tossVal === 0.5 ? "Heads" : "Tails";
//   console.log(result);
// } while (result === "Heads");
// -----------------------------------------------------------------------------------------
// // for in LOOP
var book = {
    name: "Bang-e-Dara",
    author: "Allama Muhammad Iqbal",
    pubyear: 1924,
};
for (var key in book) {
    console.log("".concat(key, ": ").concat(book[key]));
}
// -------------------------------------------------------------------------------------
// FOR OF LOOP
var fruits = ["Pineapple", "Orange", "mango", "Banana"];
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var f = fruits_1[_i];
    console.log(f);
}
