console.log(Boolean(1))                    //true
console.log(Boolean(0))                    //false
console.log(Boolean("Hello"))              //true
console.log(Boolean(""))                   //false
console.log(Boolean(null))                 //false
console.log(Boolean(undefined))            //false
console.log(Boolean({}))                   //true
console.log(Boolean([]))                   //true


//αεναο loop
while (1) {
  console.log("Hello")
  break;
}

do {
  console.log("one iteration")
} while (0)

for(let i=1; 1; i++){
  console.log("In for")
  break;
}

let num = 10

while(num) {
  console.log(num)
  num--
}

// && || !
console.log("Coding" && 7)        //truthy && truthy  --> επιστρέφει το last truthy value  
                                  //truthy && falsy  --> επιστρέφει το first falsy value όχι false

console.log(false || "Default")       //truthy || truthy --> επιστρέφει το first thruthy value
                                    //αν όλα είναι false εμφανίζει το τελευταίο false
const username = "Username" || "Default"
let isBtnExists = true
let button = "Button"
const buttonToShow = isBtnExists && button