// /**destructuring in arrays */
// const nums =[1,2,3]
// const [a,b,c]=[1,2,3]
// console.log(a)
// console.log(b)
// console.log(c)

// const num =[1,2,3]
// const [m,n,o,p]=[1,2,3]
// console.log(m)
// console.log(n)
// console.log(o)
// console.log(p)

// //for nested array
// const [s,q,r]=[1,2,[4,5,6]]
// console.log(s)
// console.log(q)
// console.log(r)


/**destructuring of an object */

const per ={
    age :99,
    name: "Rohit",
    city: "Bangalore",
    address:{
        city :"bangalore",
        state :"Karnataka"
    }

}
const {name, age,address:{city,state}}=per
console.log(name)
console.log(age)
console.log(city)


