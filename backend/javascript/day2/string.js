/**
 * String
 */

let name ="Rohit"
let country ="India"
console.log(name,country)
console.log(typeof(name,country))

/** Accessing characters based on index */
console.log(name[0])
console.log(country[0])

//string is immutable
name[0]="M"
console.log(name)

//length of the string
console.log(name.length)

//concatenation
let firstname="Rohit"
let lastname=" Sahu"
let fullname= firstname.concat(lastname)
console.log(fullname)
console.log(firstname+lastname)

//SCLICING
 console.log(fullname)
 console.log(fullname.slice(2))
 console.log(fullname.slice(2,5))
 console.log(fullname.slice(-5))
 console.log(fullname.slice(-5,-1))

 //index of
 console.log(fullname.indexOf('h'))

 //trim
 let word="  Rohit"
 console.log(word)
 console.log(word.trim())

 //split
 let word1="Rohit is in an Engineering college"
 //splitting with space ...gives array of string
 console.log(word1.split(" "))
 //splitting without space ...gives array of characters
 console.log(word1.split(""))






