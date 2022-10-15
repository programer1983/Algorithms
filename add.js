// Universal sum

// Write a function that adds 2 numbers. The function should work as shown 
// in the example below:

// Input: Number, Number

// Output: Number


// function add(a, b) {
//     if (typeof a === "undefined"){
//         return add
//     }
//     if (typeof b === "undefined"){
//         return function sum(c){
//             if (typeof c === "undefined"){
//                 return sum
//             }
//             return a + c
//         }
//     }
//     return a + b
//   }
  
//   console.log(add(20, 22)) // -> 42
//   console.log(add(20)(22)) // -> 42
//   console.log(add(20)()(22)) // -> 42
//   console.log(add(20)()()()(22)) // -> 42
//   console.log(add(20)()()()()()()()()()()()(22)) // -> 42
//   console.log(add()(20)(22)) // -> 42
//   console.log(add()()()()(20)(22)) // -> 42
//   console.log(add()(20)()(22)) // -> 42
//   console.log(add()()()()()(20)()()()(22)) // -> 42