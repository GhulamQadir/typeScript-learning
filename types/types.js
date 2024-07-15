// // TYPE ALIAS For OBJECT
// type Student = {
//   name: string;
//   email: string;
//   rollNo: number;
//   class: number;
// };
// let student1: Student = {
//   name: "Ebaad",
//   email: "ebaad@gmail.com",
//   rollNo: 2345,
//   class: 12,
// };
// console.log(student1);
let userName = "Ghulam Qadir";
let rollNO = 3456;
console.log(userName);
console.log(rollNO);
export {};
// ------------------------------------------------------------------------------------------------
// // TYPE LITERAL
// let tshirtSize: "small" | "medium" | "large" | "x-large";
// tshirtSize = "medium";
// console.log(tshirtSize);
// ------------------------------------------------------------------------------------------------
// // TYPE UNION
// let countVal: string | number;
// countVal = "seventy nine";
// // countVal = false  // (it throws an error because type boolean is not assignable to type string or number)
// countVal = 79;
// console.log(countVal);
// ------------------------------------------------------------------------------------------------
// // TYPE INTERSECTION
// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };
// type Company = {
//   companyName: string;
//   companySize: string;
//   compLocation: string;
// };
// type PersonAndCompany = Person & Company;
// let combineData: PersonAndCompany = {
//   name: "Faizan",
//   age: 24,
//   address: "xyz street, Karachi",
//   companyName: "Estimate.ai",
//   companySize: "80+people",
//   compLocation: "shahrah-e-faisal, Karachi",
// };
// console.log(combineData);
