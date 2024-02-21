// const user={
//     name:"Rohit",
//     age:22,
//     city:"bangalore"
// }
// //accessing data
// console.log(user.name)
// //or
// console.log(user['name'])

// //adding data to the object
// user.country="India"
// user["continent"]="Asia"
// console.log(user)

// //deleting an object
// // delete user.continent
// // console.log(user)
// //or
// delete user["continent"]
// console.log(user)


//iterate in objects
let person ={
    name:"Rohit",
    age:22,
    address : {
        city : "Bangalore",
        state : "Karnataka",
        country: "India"
    }
}

for (let key in person){
    console.log(key, "=>", person[key])
}
console.log(Object.keys(person))
console.log(Object.values(person))

//get both keys and values
console.log(Object.entries(person))

//cloning of objects using assign
const new_person = Object.assign({},person)
console.log(new_person)

//to add some more keys in the clone 
const new_person_1= Object.assign({},person,{role: "Developer"})
 console.log(new_person_1)
