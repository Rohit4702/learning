// primitives

// 1.string
var firstname ="Rohit"
var lastname=' Sahu'
console.log(firstname+lastname)
// to check the datatype of a variable
console.log("type of firstname- "+typeof(firstname))

// 2.number
var age = 19
console.log(age)
var num=1.5
console.log("type of num- "+typeof(num))
console.log("type of NaN- "+typeof(NaN))//NaN= not a  number

// 3. bigint
var big_num=123n
console.log("type of big_num- "+typeof(big_num))

// 4.null
console.log("type of null- "+typeof null)

// 5. boolean
console.log("type of null- "+typeof true)

// 6. symbol
var s1= Symbol()

// NON PRIMITIVE DATA TYPES

// 1. objects
var person ={
    name : "Rohit",
    age : 22,
    hobby : "trading"
}
console.log(person)

