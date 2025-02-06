const users = [
{id: 1, firstname: "Alice", email: "alice@aueb.gr", isActive: true},
{id: 2, firstname: "Bob", email: "bob@aueb.gr", isActive: false},
{id: 3, firstname: "Costas", email: "costas@aueb.gr", isActive: true}
]

users.forEach(u => console.log(u))

const emails = users.map((user) => user.email) // to (user) δεν χρειάζεται παρενθέσεις. Οταν εχουμε μηδεν ή 2 παραμέτρους ειναι απαραιτητες στα arrow functions
console.log(emails)

const activeUsers = users.filter(user => user.isActive)
console.log(activeUsers)

const cart = [
  {title: "laptop", price: 1000, stock: 10}, 
  {title: "mouse", price: 50, stock: 0}, 
  {title: "keyboard", price: 80, stock: 20}]
const totalSum = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalSum)

const isOutOfStock = cart.some(item => item.stock === 0)
const isAllOutOfStock = cart.every(item => item.stock === 0)
const user = users.find(user => user.email ==="alice@aueb.gr")
console.log(isAllOutOfStock)    //false
console.log(isOutOfStock)       //true

const userIndex = users.findIndex(user => user.email ==="alice@aueb.gr")
console.log(user, userIndex)

const posts = [
  {title: "post1", tags: ["js", "web"]},
  {title: "post2", tags: ["nodejs", "backend"]},
  {title: "post3", tags: ["react", "frontend"]}
]

const allTags = posts.flatMap(post => post.tags)
console.log(allTags)
const fruits = ["Apples", "Oranges"]
for(const[index, fruits] of fruits.entries()) {
  console.log(`Index: ${index}, Fruit: ${fruit}`)
}