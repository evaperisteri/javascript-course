const calc = {
  add: function(a, b) {
    return a + b
  },
  sub(a, b) {
    return a - b
  }
}

console.log(calc.add)  //η add ειναι callable και μπορούμε να βαζουμε τιμες στην παρένθεση για να τρεξει
console.log(calc.add(5, 7))
console.log(calc.sub(10, 4))
