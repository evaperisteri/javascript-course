const students = ['Alice', 'Andreas', 'Bob', 'Costas']

// students.forEach(function(stu, index, arr) {
//   console.log(stu, index, arr)
// })

// students.forEach(function(stu, _, arr) {      // Με την κατω παυλα κανουμε ignore ton index
//   console.log(stu, arr)
// })

// let filtered = students.filter(student => student === 'Andreas')
// console.log(filtered)

// let mapped = students.map(student => "Student: " + student)
// console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)