 var num=20
// if (num%2==0) {
// console.log("even")
// }
// else{
// console.log("odd")
// }

//or using ternary operator
//num%2==0 ? console.log("even") : console.log("odd")

//nested conditional
 var a = -1
// if (a>0) {
//     if (a>5) {
//         console.log(" a is greater than 0 and 5")
//     }
//     else{
//         console.log("a is greater than 0 but less than 5")
//     }
// }
// else{
//     console.log("a is less than 0")
// }

a>0 ? a>5? console.log(" a is greater than 0 and 5") : console.log("a is greater than 0 but less than 5") : console.log("a is less than 0")

/**
 * switch
 */
var fruit="Apple"
switch (fruit) {
    case "Apple":
        console.log("it is an apple")
        break;
    case "Mango":
        console.log("it is a mango")
        break;

    default:
        console.log("not a valid fruit")
        break;
}