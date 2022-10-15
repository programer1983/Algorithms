// Flip the 3x3 matrix

// Write a function that takes a 3x3 matrix and flips to
// 90 degrees clockwise.

// Optional: Write 2 more functions that flip the matrix 180 and 270 degrees.
// ```
// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]  
// [7, 8, 9]    [9, 6, 3]   
// ```

// Input: Number[][]

// Output: Number[][]


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
  
//   function rotate(source) {
//     const rotated = source[0].map(_ => [])

//     for (let i = 0; i < source.length; i++){
//         for (let j = 0; j < source[i].length; j++){
//             rotated[j][source.length - 1 - i] = source[i][j]
//         }
//     }
//     return rotated
//   }

//   function rotate180(source){
//     return rotate(rotate(source))
//   }

//   function rotate270(source){
//     return rotate(rotate180(source))
//   }

//   function rotate360(source){
//     return rotate(rotate270(source))
//   }


//   console.log(rotate(matrix))
//   console.log(rotate180(matrix))
//   console.log(rotate270(matrix))
//   console.log(rotate360(matrix))