const arr = [1, 2, 3]
console.log(arr.join(", "))

//ο κώδικας αν δεν είχαμε την join
let out = ""
for (const item of arr) {
  out += item + ", "
}
console.log(out)