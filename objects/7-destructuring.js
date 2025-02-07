const [a, b] = [1, 2]     //array destructure το πρωτο κομμάτι ειναι syntax, οχι πινακας

const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens"
}

const {firstname, age, city} = person   //object destructure, now each key is a disinct "variable"
console.log(firstname, age, city)

const {firstname: first, age: newAge, city: myCity} = person      //renaming keys
console.log(first, newAge, myCity)