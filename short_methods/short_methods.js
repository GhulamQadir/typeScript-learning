// // INDEX SIGNATURE
// type DynamicForm = {
//   [key: string]: string | number;
// };
// let studentForm: DynamicForm = {
//   name: "abc",
//   rollNo: 4233,
//   email: "abc@gmail.com",
// };
// let registrationForm: DynamicForm = {
//   firstName: "XYZ",
//   lastName: "abc",
//   email: "xyz@gmail.com",
//   phoneNum: 42342342424,
//   city: "Karachi",
// };
// console.log("studentForm=>>", studentForm);
// console.log("registrationForm=>>", registrationForm);
// -----------------------------------------------------------------------------------------------
// explicit type casting or type assertion (to change the type of variable forcefully)
let myName = "Ghulam Qadir";
let takeNameAsString = myName;
// // we can do this by also using this method
// let takeNameAsString: number = <number>myName;
console.log(takeNameAsString);
export {};
