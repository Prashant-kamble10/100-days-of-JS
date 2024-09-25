import { name, calculateSum } from "./sum.js";
import { names } from "./xyz.js";

console.log("this is a app module");

calculateSum(5, 5);

console.log(name);
console.log(names);

console.log(this); // { }
