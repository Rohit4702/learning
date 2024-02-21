/*********** VAR *****************/
/* it has function scope
function f1(){
    var i=5
    console.log(i)
}
f1()
console.log(i) */


//it  has no block scope
/*
{
    var i=5
}
console.log(i) */

//it is hoisted
/*
console.log(i)
var i=5 */



/*********** LET ***************/

//no hoisting 
/**
 * console.log(i)
 * let i = 6
 */

//it also has block scope
/** 
  {
    let name="Rohit"
  }
  console.log(name)
 */


  /************** CONST ***************/
  const country ="India"
  country="Russia"
  console.log(country)