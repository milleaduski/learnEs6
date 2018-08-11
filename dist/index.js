"use strict";

// const array = ["Duski","Millea","Aliandra","Shorter"];
// //foreach data
// array.forEach(data=>{
// 	console.log(data)
// })

var restSpread = function restSpread(param1, param2, param3) {
  console.log("My name: " + param1 + " Lastname:" + param2 + " Age :" + param3);
};
//rest and spread
var fullname = ["Millea", "Duski harahap", 21];
restSpread.apply(undefined, fullname);