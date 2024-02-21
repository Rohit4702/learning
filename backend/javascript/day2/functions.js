function hello() {
    console.log("hello students !")
}


hello()
hello()
function sum(a=6,b=5) {
    return a+b;
}
console.log(sum(1,1))


function func(){
    console.log(arguments)
}
func(1,2,3,4,5)