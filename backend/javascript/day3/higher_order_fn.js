// function operation(operatorFn,a,b){
//     return operatorFn(a,b)
// }
// function add(a,b){
//     return a+b
// }
// let result = operation(add,5,6)
// console.log(result)

//or

function getGreet(){
    return function(){
        console.log("hello students")
    }
}
let greetFn = getGreet()
console.log(typeof greetFn)
greetFn()