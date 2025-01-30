const arr = [1, 2, 3, 4, 5, 6, 7, 8]

//delete
const arr2 = arr.splice(0, 4)   //από τη θέση μηδέν να διαγράψει 4 στοιχεία
console.log(arr2)
console.log(arr)


//insert
arr.splice(0, 0, 10, 11)    //από τη θέση 0 διέγραψε 0 στοιχεία και εισήγαγε στην αρχή το 10 και το 11
console.log(arr)


//update
arr.splice(0, 1, 11)    //στη θέση 0 δίεγραψε 1 στοιχείο και στη θέση του βάλε το 11
console.log(arr)