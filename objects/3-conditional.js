const book = {
  author: {first: "th", last: "Andr"}
}
let lastname = book.author.last   
let lastname2 = book?.author?.last  //conditional operator για περιπτωσεις όπου συναντάει null

console.log(lastname)