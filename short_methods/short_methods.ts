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

// // explicit type casting or type assertion (to change the type of variable forcefully)
// let myName: unknown = "Ghulam Qadir";
// let takeNameAsString: number = myName as number;
// // // we can do this by also using this method
// // let takeNameAsString: number = <number>myName;
// console.log(takeNameAsString);

// ----------------------------------------------------------------------------------------

// difference between any, unknown and never
// any: The any type turns off all type checking for the variables or expressions it is applied to.

let userName: any = "Ali";
userName = 45;
userName = true;
userName.map((val: any) => console.log(val));

// unknown: The unknown type is a safer alternative to any because it still enforces type checking and type
// safety.
// Variables of type unknown can hold values of any type , but you must perform type checks or type
// assertions before using them in any ways.

let user1: unknown = "Sameer";
user1 = 54;
// but we cannot apply methods on it
// user1.map it gives an error

// --------------------------------------------------------------------------------------

// NARROWING
function message(messagetext: string | number) {
  if (typeof messagetext === "string") {
    messagetext.toUpperCase();
  } else if (typeof messagetext === "number") {
    messagetext.toFixed(2);
  }
}
message("narrowing");
