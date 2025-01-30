const cities = ["Paris", "London", "Berlin", "Athens"]
const numbers = [10, 101, 103, 77, 99, 123, 690, 590]

console.log(cities.sort())
console.log(numbers.sort()) //sortαρει με βαση τον κώδικα ASCII άρα όχι με την αριθμητική αξία

// numbers.sort(function(a, b) {
//   if (a > b) return 1
//   if (a < b) return -1
//   if (a === b) return 0
// })

numbers.sort(function(a, b) {
  return a - b                      //b-a δίνει το αναποδο δλδ descending
})
console.log(numbers)              //ascending
console.log(numbers.reverse())    //descending