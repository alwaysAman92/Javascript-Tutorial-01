//Immediately Invoked Function Expressions (IIFE)

/*Note: An IIFE in JavaScript is a function that is executed immediately 
after it's defined. It's typically used to create a private scope for variables
and functions to avoid polluting the global namespace.*/

(function chai(){
    console.log(`DB Connected`);
})();
// output-DB Connected

//how iife is defined-
//Define the Function:
function chai() {
    console.log(`DB Connected`);
}
//Here, a function named chai is defined. This function, when called, will print "DB Connected" to the console.
//By wrapping the function definition in parentheses (function chai(){ ... }), we turn it into a function expression. Adding () immediately after it invokes the function right away.
/*(function chai() {
    console.log(`DB Connected`);
})();
*/
//Simple IIFE,
((name) /* parameter */ => {
    console.log(`DB Connected, ${name}`);
})("Ayush") /* argument | Output: DB Connected, Ayush*/
