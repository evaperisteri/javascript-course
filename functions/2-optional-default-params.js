function greet(name) {
  if (name === undefined) {
    name = "Guest"
  }
  console.log(`hello, ${name}`)
}

greet()

//default params
function getUser(name = "Guest", age = 18) {
  return {name: name, age: age}                 //return {name, age} υπονοεί το -name:- και το -age:- 
}
const obj = getUser()
console.log(obj)

function getFormattedDateTime(
  locale = "en-US",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }
) {
  const now = new Date()
  return now.toLocaleString(locale, options)
}

console.log(getFormattedDateTime("en"))