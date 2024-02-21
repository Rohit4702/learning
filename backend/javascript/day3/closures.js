/**
function hello(){
    let name="Rohit"
    console.log(name)
}

hello()

console.log(name) **/

//since name is in the function scope we cannot use it 
// outside of the fn block .
// in order to use it we need closures

function outerFn(){
    let outerVar = "i am from the outer fn"
    function innerFn(){
        console.log(outerVar)
    }
    return innerFn
}

let fn= outerFn()
fn()
/**
 * outerFn is a function that declares a variable outerVar and defines an inner function innerFn within it.

innerFn has access to the variables declared in its outer (enclosing) scope, which means it can access outerVar.

outerFn returns the reference to innerFn without invoking it. This is possible because functions in JavaScript are first-class citizens, and they can be passed around as values.

let fn = outerFn() assigns the returned function (in this case, innerFn) to the variable fn.

Finally, fn() is called, which executes the innerFn function. Despite being called outside of the outerFn scope, innerFn still has access to the outerVar variable due to closure. So, when fn() is called, it prints "i am from the outer fn" to the console.

In summary, the code demonstrates how a function declared inside another function retains access to the variables of its outer function even after the outer function has finished executing. This behavior is known as closure.
 */

function customerCounter(){
    let count=0
    return function(){
        count++ 
        console.log("New customer count is ",count)
    }
}
let counter =customerCounter()
counter()
counter()
counter()
