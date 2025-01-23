let age = 25
let distance = 10.5
let bigTimeMillis = 12234565n


bigTimeMillis++ //postfix   (εχει χαμηλή προτεραιότητα)
++bigTimeMillis //prefix  (εχει υψηλότερη προτεραιότητα εναντι της Postfix)

age = age + 2   //age += 2
distance -= 5

console.log(age, distance, bigTimeMillis)