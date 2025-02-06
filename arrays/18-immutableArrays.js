const numbers = [1, 2, 3, 4]

//modifies the initial array
numbers.push(5)
numbers.splice(4, 0, 5) //στη θεση 4 να διαγραψει 0 και να προσθεσει 5

function addToArrayEnd(arr, num) {
  return [...arr, num]
}

function addToArrayStart(arr, num) {
  return [num, ...arr]
}

function addToArrayAtIndex(arr, num, index) {
  return[...arr.slice(0, index), num, ...arr.slice(index)]
}

//update
numbers.splice(3, 1, 8)     //στη θεση 3 διαγραφει 1 στοιχειο και βαζει την τιμη 8

const updateArray = (arr, newValue) => arr.map(item => newValue)

//fresh copy --original array is unmodified
const updateOneItem = (arr, index, newValue) => arr.map((item, i) => (i === index) ? newValue : item)
const updatedNumbers = updateOneItem(numbers, 2, 17)    //στον πινακα ναμπερς στη θεση 2 βαλε την τιμή 17
console.log(updatedNumbers)

//delete. modifies the initial array
let index = numbers.indexOf(1)
if (index!== -1) numbers.splice(index, 1)    //στη θεση index διαγραφουμε ενα στοιχειο

//delete. fresh copy of deleted array
//επιστρεφει σε πίνακα όσα στοιχεια του αρχικου δεν ειναι ισα με num
const deleteFromArray = (arr, num) => arr.filter(item => item !== num)
const deleteByIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)]