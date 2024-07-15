// CALLBACK EXAMPLE: 1
function greetUser(callBack: (userName: string) => void) {
  let userName = "Ghulam Qadir";
  callBack(userName);
}

greetUser((userName: string) => {
  console.log(`UserName: ${userName}`);
});

// ------------------------------------------------------------------------------------------------------

// CALLBACK EXAMPLE: 2
let parentFunc = (callFunc: () => void) => {
  console.log("Hello from Parent function !");
  callFunc();
};

let childFunc = () => {
  console.log("Hello from child function");
};
parentFunc(childFunc);

// ------------------------------------------------------------------------------------------------------

// CALLBACKS EXAMPLE: 3
let numArray = [4, 6, 2, 9, 8];
let sortArray = (callBack: (numArray: number[]) => number[]) => {
  console.log(callBack(numArray));
};
sortArray((numArray) => {
  let sortedArray = numArray.sort();
  return sortedArray;
});
