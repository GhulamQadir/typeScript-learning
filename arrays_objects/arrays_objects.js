// // MULTIDIMENSIONAL ARRAY
// let multiArray: number[][] = [
//   [1, 23, 45],
//   [3, 76, 54],
// ];
// console.log(multiArray[1][2]);
// ---------------------------------------------------------------------------------------------
// // ARRAY OF OBJECTS
// type Todo = {
//   todoName: string;
//   todoDescrip: string;
//   date: string;
// };
// let todos: Todo[] = [
//   {
//     todoName: "Article Reading",
//     todoDescrip: "Latest article about global economy",
//     date: "4/5/2024",
//   },
// ];
// // this array method adds element at end
// todos.push({
//   todoName: "Swimming",
//   todoDescrip: "Swimming on coming weekened",
//   date: "7/5/2024",
// });
// // console.log(todos);
// // this array method adds element at start
// todos.unshift({
//   todoName: "latest todo",
//   todoDescrip: "checking array's method",
//   date: "10/8/2024",
// });
// // console.log(todos);
// // finding todo by date
// let findTodo = todos.find((todo) => todo.date === "7/5/2024");
// if (findTodo === undefined) {
//   console.log("todo not found");
// } else {
//   console.log("Todo found=>>", findTodo);
// }
// --------------------------------------------------------------------------------------
// ARRAYS PRACTISE
let matrixArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
export {};
// let sumOFDiagonals = 0;
// let diagonalElements: number[] = [];
// for (let i = 0; i < matrixArr.length; i++) {
//   diagonalElements.push(matrixArr[i][i]);
//   sumOFDiagonals += matrixArr[i][i];
// }
// console.log(`Diagonal elements: =>>${diagonalElements}`);
// console.log(`Sum of Diagonals: =>>${sumOFDiagonals}`);
// ------------------------------------------------------------------------------------------
// // FILTERING MULTIDIMENSIONAL ARRAY
// let filteredArray: number[] = [];
// for (let j = 0; j < matrixArr.length; j++) {
//   let filterMatrix: number[] = matrixArr[j].filter((a) => {
//     return a % 2 === 0;
//   });
//   filteredArray.push(...filterMatrix);
// }
// console.log(filteredArray);
// --------------------------------------------------------------------------------------------
// // FILTERING ARRAY OF OBJECTS
// type Book = {
//   name: string;
//   author: string;
//   publishedYear: number;
// };
// let books: Book[] = [
//   {
//     name: "The Red and the Black",
//     author: "Stendhal",
//     publishedYear: 1830,
//   },
//   {
//     name: "The History of Tom Jones, a Foundling",
//     author: "Henry Fielding",
//     publishedYear: 1749,
//   },
//   {
//     name: "War and Peace",
//     author: "Tolstoy",
//     publishedYear: 1869,
//   },
//   {
//     name: "Madame Bovary",
//     author: "Gustave Flaubert",
//     publishedYear: 1856,
//   },
// ];
// let filterBooksByYear = books.filter((book) => {
//   return book.publishedYear > 1800;
// });
// console.log(filterBooksByYear);
// let filterBooksByAuthor = books.filter((book) => {
//   return book.author === "Tolstoy";
// });
// console.log(filterBooksByAuthor);
// -------------------------------------------------------------------------------------------
