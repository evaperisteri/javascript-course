const obj = {id: 1, firstname: "Alice"}

// ADD properties
//modify the object     ---σε react framework δεν θα εμφανιζόταν η αλλαγή
obj.lastname = "W."
console.log(obj)

//immutable - fresh copy
const addToObj = (obj, field, value) => ({...obj, [field]: value})

const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)

//UPDATE
//modifies, updates the object
obj.firstname = "Athana"
console.log(obj)

//immutable- fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Athana")
console.log(updatedObj)

//DELETE 
//immutable delete
const deleteIdFromObj = (obj, field) => {     //destruct object properties ignoring the field to be deleted
  const {[field]: _, ...objToReturn} = obj
  return objToReturn
}

const objFromDelete = deleteIdFromObj(obj, "id")
console.log(objFromDelete)