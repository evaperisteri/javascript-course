//Higher Order Function
//η εσωτερική function έχει προσβαση στις μεταβλητές του outter scope. ΕΠιστρέφει συνάρτηση --Function Factory
//Closure
function createMuliplier(multiplier){
  return function(num) {
    return num * multiplier
  }
}
//το παραπάνω σε fat arrow μορφή
const createMultiplier2 = (multiplier) => (num) => num * multiplier

const double = createMuliplier(2)
const triple = createMuliplier(3)
console.log(double(5))