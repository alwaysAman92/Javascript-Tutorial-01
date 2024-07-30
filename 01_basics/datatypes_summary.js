// primitive (call by value)
// 7 types-string,number,boolean,null,undefined,symbol,BigInt
/* undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null .*/

//non primitive or refrence 
//arrays,objects,functions
//JavaScript is a dynamically typed language. This means that the type of a variable is not declared when the variable is created, but is instead determined at runtime based on the value assigned to the variable.
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);
const feelings=["happy","sad","anxious"]
//objects
let myObj={
    name:"aman",
    age: 22,
}
//functions
const myFunctions=function(){
    console.log("hello world");
}
//non primitive datatypes are of function object type
// ++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive),heap(non primitive)
let myname="Aman"
let myothername=myname
myothername="sonu"
console.log(myname);
console.log(myothername);

let userOne={
    email:"user1@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="aman@google.com"
console.log("userOne.email");
console.log("userTwo.email");