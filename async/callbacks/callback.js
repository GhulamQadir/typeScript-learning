// CALLBACK EXAMPLE: 1
function greetUser(callBack) {
    let userName = "Ghulam Qadir";
    callBack(userName);
}
greetUser((userName) => {
    console.log(`UserName: ${userName}`);
});
// ------------------------------------------------------------------------------------------------------
// CALLBACK EXAMPLE: 2
let parentFunc = (callFunc) => {
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
let sortArray = (callBack) => {
    console.log(callBack(numArray));
};
sortArray((numArray) => {
    let sortedArray = numArray.sort();
    return sortedArray;
});
export {};
