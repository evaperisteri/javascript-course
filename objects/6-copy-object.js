const initial = { name: "Alice", age: 30, address: {street: "Patision", num: 76}}

//1. shallow copy with spreading
const copyInitial = {...initial}    
console.log(copyInitial)

//2. Object type
const copyInitial2 = Object.assign({}, initial)

//3.Deep copy with JSON function --δεν λειτουργει αν περιεχονται functions και undefined μεσα στο object
const copyInitial3 = JSON.parse(JSON.stringify(initial))

//4. Deep copy
const copyInitial4 = structuredClone(initial)