// Remove all duplicate values in a string

// Write a function that takes a string and returns a new one,
// in which all duplicate characters will be removed.

// Input: String
// Output: String
 
// function removeDupes(str) {
//     const res = []
//     const map = {}

//     for(let i = 0; i < str.length; i++ ){
//         const char = str[i]

//         if(!map[char]){
//             map[char] = true
//             res.push(char)
//         }
//     }
//     return res.join("") 
// }


// function removeDupes(str) {
//     return Array.from(new Set(str)).join("")
// }


// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'