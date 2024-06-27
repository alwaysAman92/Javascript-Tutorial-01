function one(params) {
    const username="aman"
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()
/* output-aman
Note: In nested function child can access parent variables.*/
/*Hoisting,

console.log(addone(5));

function addone (num) {
    return num + 1
} // Output: 6


// console.log(addtwo(5));

const addtwo = function (num){
    return num + 2
} // Output: error */