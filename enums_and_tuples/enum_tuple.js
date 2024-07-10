// // ENUMS
// enum SubwayTypes {
//   SpicyItalian,
//   Roastbeef,
//   Cheesesteak,
//   Tuna,
// }
// console.log(SubwayTypes[2]);
function checkForColor(rgb) {
    var red = rgb[0], green = rgb[1], blue = rgb[2];
    return "Rgb color with values red: ".concat(red, ", green: ").concat(green, " and blue: ").concat(blue);
}
var color = [155, 200, 0];
var checkColor = checkForColor(color);
console.log(checkColor);
