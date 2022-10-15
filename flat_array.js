// Flat array

// Write a function that takes an array with nested arrays and
// unpack into the resulting flat mass. As a result, you should get
// new one-dimensional array.

// Input: Array
// Output: Array

// function flatten(array){
//     const res = []

//     for(let i = 0; i < array.length; i++){ 
//         if(Array.isArray(array[i])){
//             const flat = flatten(array[i])
//             for(let j = 0; j < flat.length; j++){
//                 res.push(flat[j])
//             }
//         }else{
//             res.push(array[i])
//         }
//     }
//     return res
// }

// console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]