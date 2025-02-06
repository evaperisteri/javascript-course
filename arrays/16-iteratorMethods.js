const students = ['Alice', 'Andreas', 'Bob', 'Costas']
students.forEach(function(val) {console.log(val)})
students.forEach(function(val, i) {console.log(val, i)})
students.forEach(function(val, index) {console.log(index, val)})
students.forEach(function(val, index, arr) {console.log(val, index, arr)})
students.forEach(function(val, _, arr) {console.log(val, arr)}) //αγνοούμε το index με _

students.forEach(function(stu, index, arr) {
  console.log(stu, index, arr)
})

students.forEach(function(stu, _, arr) {      // Με την κατω παυλα κανουμε ignore ton index
  console.log(stu, arr)
})

let filtered = students.filter(student => student === 'Andreas')
console.log(filtered)      //επιστρεφει διαφορετικο πίνακα, δεν αλλαζει τν original

let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)