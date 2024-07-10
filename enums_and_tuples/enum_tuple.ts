// // ENUMS
// enum SubwayTypes {
//   SpicyItalian,
//   Roastbeef,
//   Cheesesteak,
//   Tuna,
// }
// console.log(SubwayTypes[2]);

// // CONST ENUM (difference betwen enum and const enum is that we cannot access const enum using its index)
// const enum SubwayTypes {
//   SpicyItalian,
//   Roastbeef,
//   Cheesesteak,
//   Tuna,
// }
// console.log(SubwayTypes.Cheesesteak);

// --------------------------------------------------------------------------------------

// // ENUM PRACTISE QUESTIONS
// function checkForWeekend(day) {
//   enum DaysOfWeek {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//   }
//   if (day === DaysOfWeek[0] || day === DaysOfWeek[6]) {
//     console.log("Its a weekend!");
//   } else {
//     console.log("Its a working day");
//   }
// }
// checkForWeekend("Saturday");

// ---------------------------------------------------------------------------------------------

// // TUPLE
// let milkShake: [string, string] = ["Mango Shake", "Medium Glass"];
// console.log(milkShake);

// ----------------------------------------------------------------------------------------------

// // TUPLES PRACTISE
// type RgbCol = readonly [number, number, number];

// function checkForColor(rgb: RgbCol): string {
//   const [red, green, blue] = rgb;
//   return `Rgb color with values red: ${red}, green: ${green} and blue: ${blue}`;
// }
// let color: RgbCol = [155, 200, 0];
// let checkColor = checkForColor(color);
// console.log(checkColor);
