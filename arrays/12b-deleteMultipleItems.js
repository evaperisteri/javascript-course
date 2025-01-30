const arr = [1, 2, 3, 2, 5, 2]

//πιο ασφαλές να σβήνεις από το τέλος προς την αρχή για να μην χαθεί κάποιο στοιχείο του πίνακα
const deleteBackwards = (arr, val) => {
  if(!arr) return       //!arr: αν δεν υπάρχει το arr
  let i = arr.length-1

  //η while αυτή για την θέση 0 δεν εκκινεί. χρειάζεται τροποίηση γιατί το μηδέν δίνει falsy τιμή και δεν προχωράει
  while(i){
    if (arr[i] === val) {
      arr.splice(i, 1)      //στη θέση i διέγραψε 1 στοιχείο
    }
    i--
  }
}

deleteBackwards(arr, 2)
console.log(arr)