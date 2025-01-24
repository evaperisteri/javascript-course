
//Number () : constructor function
console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY) //12/0
console.log(Number.NEGATIVE_INFINITY) //-12/0

if(Number.isInteger(12)){
  console.log("Is Integer")
} else {
  console.log("Not Integer")
}

//στη wrapper Number /NaN : not a number ex. (10/"hi") /δεν κανει coersion
if (Number.isNaN(NaN)){
  console.log("True")
} else {
  console.log("False")
}


//sto global scope/ εχει τη δυνατοτητα να μετατέπει τα στρινγκ. πιο ασφαλής
if (isNaN(NaN)) {
  console.log("Is Nan")
}else {
  console.log("Not is Nan")
}

console.log(Number.parseInt("44"))
console.log(parseInt("42"))       //global scope

console.log(Number.parseFloat("44.8"))
console.log(parseFloat("45.1"))   //global scope

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatingPoints(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

console.log(compareFloatingPoints(num1, num2))