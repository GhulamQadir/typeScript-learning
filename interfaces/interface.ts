// // strucutural typing kehty hain isy, yaani circle or football 1 dusry k sath swap karskty hain qk dono interface same hain bs values ka difference ha
// interface FootBall {
//   radius: number;
// }
// interface Circle {
//   radius: number;
// }

// let footBall: FootBall = {
//   radius: 25,
// };
// let circle: Circle = {
//   radius: 30,
// };
// console.log("football==>> ", footBall);
// console.log("circle==>> ", circle);

// // now we swap circle with football
// circle = footBall;
// footBall = circle;
// console.log("circle=>>", circle);
// console.log("football=>>", footBall);

// // -------------------------------------------------------------

// interface Ball {
//   diameter: number;
// }
// interface Cylinder {
//   diameter: number;
//   length: number;
//   height: number;
// }

// let ball: Ball = {
//   diameter: 30,
// };
// console.log("ball before->", ball);
// let cylinder: Cylinder = {
//   diameter: 40,
//   length: 50,
//   height: 20,
// };

// // cylinder = ball // error
// ball = cylinder;
// console.log("ball after->", ball);
// // Because a ball does not have a length and height, then it cannot be
// // assigned to the cylinder variable. However, all of the members
// // of Ball are inside Cylinder, and so it can be assigned.

// ------------------------------------------------------------------------------------------------
