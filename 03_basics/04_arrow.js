const user={
    username: "Aman",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to the website`);
        //console.log(this) to print the current context
    }//this function is used to refer current context
   
}

user.welcomeMessage()//output-Aman welcome to the website
user.username="sam"
user.welcomeMessage()//sam welcome to the website as the current context is changed the name gets changed

console.log(this)//prints {} as no context available
//console.log(this) when we print this in console it prints the window global object
function one(){
    console.log(this);
}
// one() // Output: We get many values

function two() {
    let username = "ayush"
    console.log(this.username);
}
// two() // Output: Undefined 

const three = function (){
    let username = "sam"
    console.log(this.username);
}
// three() // Output: undefined 

//Arrow function

//Arrow functions are a shorter syntax for writing functions in JavaScript. They have a few special properties, such as not having their own this context.


/*const chai = () => { // It's an arrow function
    let name = "Ayush"
    console.log(this.name);
}
chai() // Output: undefined
*/

/*Definition: const chai = () => { ... } defines an arrow function named chai.
Inside the Function: It declares a variable name with the value "Ayush". However, it logs this.name, not name.
Output: The output is undefined. This is because arrow functions do not have their own this context; they inherit this from the surrounding scope, which in this case is likely the global context where this.name is not defined.
Note: If you log this inside the arrow function, you'll typically get an empty object {} in strict mode, because this in the global scope (in strict mode) is undefined.*/

//explicit return
/*const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)) // Output: 7

Definition: const addTwo = (num1, num2) => { return num1 + num2; } defines an arrow function that takes two parameters num1 and num2.
Return Statement: The function explicitly returns the sum of num1 and num2 using the return keyword.
Output: console.log(addTwo(3, 4)) logs 7 to the console. */

//implicit return
/*const add = (num1, num2) => (num1 + num2);
console.log(add(3, 4)); // Output: 7

Definition: const add = (num1, num2) => (num1 + num2) defines an arrow function that takes two parameters num1 and num2.
Implicit Return: When using parentheses () instead of curly braces {}, the function implicitly returns the result of num1 + num2 without needing the return keyword.
Output: console.log(add(3, 4)) logs 7 to the console. */

//important
/*With Curly Braces {}: You need to use the return keyword to return a value.
With Parentheses (): The value is returned implicitly, so no need for the return keyword. */

//returning an object
/*const returnObject = () => ({username: "ayush"});
console.log(returnObject()) // Output: { username: 'ayush' }

/*Definition: const returnObject = () => ({username: "ayush"}) defines an arrow function that returns an object.
Parentheses for Objects: When returning an object implicitly, wrap the object in parentheses ({ ... }) to differentiate it from the function body.
Output: console.log(returnObject()) logs the object { username: 'ayush' } to the console. */