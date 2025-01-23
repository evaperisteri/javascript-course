const vat = "123"
const num = 123

let comp1 = num == vat  //μετατρέπει (coersion) το string σε number και θα βγαλει true
let comp2 = num === vat  //actual comparison, ελέγχει και την τιμή και τον τύπο δεδομένων
console.log(comp1,comp2)

let temp = 40
let isSunny = temp >= 40

//if isSunny is true then isSunnyStr = "Big-Sun" else isSunnyStr = "Small Sun"
let isSunnyStr = (isSunny) ? "Big-Sun" : "Small-Sun"
console.log(isSunny, isSunnyStr)