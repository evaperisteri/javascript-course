const cities = ["Athens", "Paris", "Toronto"]
//Add & Modify the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "Berlin"

cities.forEach(c => console.log(c)) //lambda στη javascript λεγεται arrow function

cities.sort() //λεξικογαρφικά σύμφωνα με τον ASCII, ταξινομεί τον υπαρχων πίνακα
cities.sort((a, b) => a.localeCompare(b))  //αυξουσα ταξινόμηση
cities.sort((a, b) => b.localeCompare(a))  //φθίνουσα ταξινόμηση
cities.sort((a, b) => a.localeCompare(b), "en")  //international κωδικός χώρας ως δεύτερη παράμετρος
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b)) // η slice() δημιουργεί shallow copy και μετα Ταξινομει
//Deep Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))
const cities2 = structuredClone()
//Shallow Copy -- spread operator
const citiesCopy2 = [...cities]
const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)