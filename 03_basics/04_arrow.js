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
//syntax of an arrow function
const addtwo=(num1,num2) => {
    return num1+num2
}
console.log(addtwo(2,3));

//implicit return
const add = (num1, num2) => (num1 + num2)
console.log(add(3, 4)); // Output: 7

/* Note: When using curly braces {} then we have use return keyword and when using parenthesis () then 
we don't have to use return keyword. */

