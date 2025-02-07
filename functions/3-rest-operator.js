function max(...numbers) {    // o numbers ειναι ο ρεστ αλλα στην πραγματικότητα είναι ενας πίνακας που διατρέχεται
  let maxVal = -Infinity
  for (let n of numbers) {
    if (n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}
console.log(max(1, 6, 9, 3, 88))

function sum(...rest) {                       // οι τρεισ τελειες ειναι rest --συλλέγει δεδομενα
  // return rest.reduce((total, num) => total + num, 0)
  return Math.max(...rest)                    // οι τρεισ τελειες ειναι spread --παρέχει δεδομένα
}
console.log(sum(1, 2, 7, 9, 22))

function greet(message, ...names) {
  console.log(message + ", " + names.join(", "))
}

greet("hello", "Alice", "Bob", "Costas")