function sayMyName(params) {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
sayMyName() 
//sayMyName-reference
//sayMyName-execution

function addTwoNumbers(num1,num2) {
    console.log(num1+num2)
}
addTwoNumbers(3,undefined)//output-NaN
addTwoNumbers(3,4); //output-7
addTwoNumbers(3,null); //output-3
addTwoNumbers(3,"4"); //output-34
//num1 and num2 are parameters
//values passed during calling of function are called arguments
/*function addTwoNumbers(num1,num2) {
    console.log(num1+num2); 
}
    const result=addTwoNumbers(3,4) output-undefined*/
    //as the above function does'nt return anything
function addTwoNumbers(num1,num2) {
    const sum=(num1+num2); 
    return sum;
}
console.log(addTwoNumbers(3,4));
//== vs ===
//=== both datatype and value should be same to be equal also known as strict equality operator
//== converts both into same datatype and checks their equality also known as loose equality operato

/*function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("Aman")); //Aman just logged in
console.log(loginUserMessage("")); //just logged in
console.log(loginUserMessage()); //undefined just logged in*/

//"" and undefined act as false values in if condition
//thus if nothing is passed into the function it considers username as undefined
function loginUserMessage(username) {
    if(!username){  //it becomes true if username=undefined
        console.log("no username is entered");
        return
    }
    return `${username} just logged in`
}
// we can also give username a default parameters
// if we enter a name the default username is overrided

function calculateCartPrice(...num1) { //here parameter is passed using rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));//output-[200,400,500,2000]
const user={
    username:"aman",
    price:200
}
function handleObject(anyobject) {
   console.log(`Username is ${anyobject.username}`); 
};
handleObject(user)
//we can also pass object directly to the function without defining it prior
//similarly we can pass array to function