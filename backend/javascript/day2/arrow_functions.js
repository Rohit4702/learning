//fn witn no arguments and no return
var hello =() => console.log("Hello Rohit !")
hello()


//fn with argument and return
var sum = (a,b) =>  a+b
console.log(sum(3,2))

//fn with multiple lines of fn body
var process = (a,b) => {
    console.log("need to process")
    return a*b
}
console.log(process(5,6))