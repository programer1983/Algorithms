// Algorithms

// Simple search

// Write a function that takes a sorted array of numbers and a number.
// It is necessary to return the index of the number, if it is in the array. Otherwise, return `-1`.

// Input: Number[], Number

// Output: number


// function search(array, target) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === target){
//             return i
//         }
//     }
//     return -1
//   }

// function search(array, target) {
//    let start = 0
//    let end = array.length - 1

//     if (target < array[start] || target > array[end]){
//         return -1
//     }

//     while (true) {
//         if (target === array[start]){
//             return start
//         }

//         if (target === array[end]){
//             return end  
//         }

//         if (end - start <= 1){
//             return -1
//         }

//         const middle = Math.floor((start + end) / 2)

//         if (target > array[middle]){
//             start = middle + 1
//         }else if (target < array[middle]){
//             end = middle - 1
//         }else{
//             return middle
//         }
//     }
// }
  
//   console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
//   console.log(search([1, 3, 6, 13, 17], 12)) // -> -1