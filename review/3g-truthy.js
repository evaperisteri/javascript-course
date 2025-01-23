
// Τιμές 0, 0.0, 0n falsy
let temp = 40
const s = "Hello"

//ότι εχει μέσα στην παρένθεση της if ειναι ή προσπαθεί να γίνει boolean //αν κάτι ειναι null ή undefined αυτόματα falsy
if (temp){
  console.log("Non-zero")
} else {
  console.log("Temp is zero")
}

let str = (s) ? "Str is non-empty" : "Str is empty"
console.log(str)