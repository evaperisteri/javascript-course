let num1 = 10
let num2 = 3
let divResult = num1 / num2

/**
 * προτεραιότητα πράξεων (), ++ -- prefix, *, /, +, -, ++ -- postfix
 */
let expr = (num2/num1) * (8.5 / 3.3)
//toFixed () μέσα στην παρένθεση ορίζουμε τα δεκαδικά του αποτελέσματος στρογγυλοποιώντας με βάση το επόμενο ψηφίο
let fixedDiv = (num1 / num2).toFixed(2)
//math.floor επιστρεφει το πηλίκο ακεραιο στρογγυλοποιώντας προς τα κάτω
let intResult = Math.floor(num1 / num2)
//math.floor επιστρεφει το πηλίκο ακεραιο στρογγυλοποιώντας προς τα πάνω
let upperInt = Math.ceil(num1 / num2)
//Math.round επιστρέφει το πηλίκο ακέραιο στρογγυλοποιώντας σωστά
let roundResult = Math.round(num1 / num2)
//επιστρέφει το υπόλοιπο της διαίρεσης (διατηρεί και το πρόσημο)
let modResult = num1 % num2 

console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult)