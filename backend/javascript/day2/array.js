// arr=[1,2,3]
// console.log(typeof arr)

// arr1=new Array()
// console.log(typeof arr1)


//array are mutable
// arr=[1,2,5,8,22,99,3,9,10]
// console.log(arr)
// arr[1]=200
// console.log(arr)


//push items at the end
// arr=[1,3,5,2,55,9]
// arr.push(11)
// console.log(arr)
// arr.push(99,100,112)
// console.log(arr)

//push items at the beginning
// arr1=[56,25,58]
// console.log(arr1)
// arr1.unshift(34)
// console.log(arr1)

//removing elt using pop method ie from the end
// let arr2=[1,2,3,4,5]
// console.log(arr2.pop())
// console.log(arr2)

//removing elt using shift method ie from the beginning
// let arr=[1,2,3,4,5]
// console.log(arr.shift())
// console.log(arr)

//adding two arrays
// let a1=[1,2,3]
// let a2=[4,5,6]
// a3=a1.concat(a2)
// console.log(a3)

//size of the array
//console.log(a1.length)

//convert arrays into string
// chr_arr=["R","o","h","i","t"," ","S","a","h","u"]
// console.log(chr_arr.join())
// console.log(chr_arr.join(""))
// console.log(chr_arr.join("$"))
//or
// console.log(typeof chr_arr.toString())

//slicing of arrays with no modification of the array
// let num=[2,5,7,34,68,56,11,33,98,39,67,71]
// console.log(num.slice(2))
// console.log(num.slice(2,5))
// console.log(num.slice(5,-1))
// console.log(num.slice(-9,-2))

//splicing of arrays with modification of the array
// let nos=[1,2,3,4,5]
// let removed = nos.splice(2,2,)
// //let removed = nos.splice(2,2,7,8,9)
// console.log(removed)
// console.log(nos)

//reverse the array
// let num=[1,2,3,4,5]
// console.log(num.reverse())

//finding index of
// let n=[1,2,3,4,5]
// console.log(n.indexOf(4))

//sorting array
let n=[14,50,2,13,3]
n.sort((a,b)=>a-b)
console.log(n)


