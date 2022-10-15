// Uniqueness of all characters in a string

// Write a function that determines if all characters in a string are unique.
// Case sensitive: ``a'` and ``A'` are different characters.
// Input: String
// Output: Boolean

// function isUnique(string){
//     for(let i = 0; i < string.length; i++){
//         const char = string[i]

//         if (string.lastIndexOf(char) !== i){
//             return false
//         }
//     }
//     return true
// }

    
//     const set = new Set()
//     for(let i = 0; i < string.length; i++){
//         const char = string[i]
//         if (set.has(char)){
//             return false
//         }
//         set.add(char)
//     }
//     return true
// }


// function isUnique(string){
//     return new Set(string).size === string.length
// }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false