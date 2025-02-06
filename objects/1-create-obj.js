const obj = {}                  //κενο
const point = {x: 1, y: 1}      //2 properties
point.z = 2                     // προσθήκη νεας ιδιότητας

const point3D = new Object()    //κενο, σπάνια χρηση
point3D.x = 1
point3D.y = 2
point3D.z = 35

const newObj = Object.create(Object.prototype)      //κληρονομει απο τα prototype objects, επισησ σπανια χρηση