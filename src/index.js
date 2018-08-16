// const array = ["Duski","Millea","Aliandra","Shorter"];
// //foreach data
// array.forEach(data=>{
// 	console.log(data)
// })

// let restSpread = (param1, param2, param3)=>{
// console.log("My name: " + param1 + " Lastname:" + param2 + " Age :" + param3)
// }
// //rest and spread
// let fullname = ["Millea","Duski harahap", 21]
// restSpread(...fullname)
// const name = "Duski"
// func = (string,variable)=>{
//  console.log(string);
// }
// let data = func`My name is ${name}`

//shorthand in obj
// const name = "Millea";
// const lastname = "Duski"

// let obj = {
// 	name, // it means name = name
// 	lastname
// }

// console.log(obj)

// //shorthand in function
// const name = "Millea";
// const lastname = "Duski"

// let funcData = function getData(){
// 	return `My name is ${name} ${lastname}`
// }
// let obj = {
// 	funcData
// }
// //
// console.log(obj.funcData())

//Destructuring
let obj = {
	name : 'Millea',
	lastname : 'Duski'
}
//assign new value
const {lastname : myLastName, name : newName} = obj
//
console.log(myLastName, newName)