// Fibonacci sequence

// Write a function that will generate a Fibonacci sequence of length `n`,
// passed as an argument.

// Input: number

// Output:Number[]


// function fibonacci(n) {
//    const seq = [1, 1]

//    if (n < 2){
//     return seq.slice(0, n)
//    }

//    while (seq.length < n){
//     const last = seq[seq.length - 1]
//     const prev = seq[seq.length - 2]
//     seq.push(last + prev)
//    }

//    return seq
//   }
  
//   console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]



// const fibonacci = (function(){
//     const seq = [1, 1]

//     return function(n){
//         console.log("Called with ", n)
//         if (seq.length >= n){
//             console.log("No compute")
//             return seq.slice(0, n)
//         }

//         while (seq.length < n){
//             const last = seq[seq.length - 1]
//             const prev = seq[seq.length - 2]
//             seq.push(last + prev)
//             console.log("Pushed: ", seq[seq.length - 1])
//         }
        
//         return seq
//     }
// })()


      
      
// console.log(fibonacci(10)) 
// console.log(fibonacci(8)) 
// console.log(fibonacci(12)) 