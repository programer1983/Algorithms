// Anagrams

// Write a function that checks if all elements in an array are anagrams of each other.

// Input: String[]

// Output: Boolean


// function allAnagrams(array) {
//     const sorted = array.map(str => str.split('').sort().join(''))

//     for (let i = 1; i < sorted.length; i++){
//         if (sorted[i] !== sorted[0]){
//             return false
//         }
//     }
//     return true
//   }
  
//   console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
//   console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false