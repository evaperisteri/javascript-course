const arr = []                          //κενός πίνακας
const arr1 = [1, 2, 3, 4, 5]            //populate
const arr2 = [1, "Alice", 3.4, true]    //πολλοί τύποι δεδομένων
const sparseArr = [1, , 3]              //sparse array
const arr3 = [,,,]                      //sparse array 3 στοιχείων
const arr4 = new Array(2)               // to new μπορεί να μην μπει.. σπανιος τροπος δηλωσης πίνακα
const grid = [[1, 2], [2, 3], [5, 6, 7]]                //grid [1][2] row, column
const objArr = [{id: 1}, {id: 2}, {id: 3}]              //object array

console.log(arr1[0])      //1
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

for (const item of arr1) {
  console.log(item)
}

for (let i=0; i < grid.length; i++) {
  for(let j = 0; j < grid[i].length; j++) {
    console.log([i][j])
  }
}

for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}