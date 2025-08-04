
// require("./xyz")

// const obj = require("./sum")
import { calculateSum, multiple } from "./calculate/index.js";
var name = "subhashis";
let a = 2;
let b = 5;
// console.log(name);
console.log(a + b);

// console.log(global);

// console.log(this); //* Print an Empty Object */ 
// console.log(globalThis);
// require("./xyz") //One module into another
console.log(globalThis === global)

calculateSum(5, 6);
multiple(3, 4);
// console.log(obj.x)