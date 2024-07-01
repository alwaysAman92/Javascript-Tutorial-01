//map
const myNumers=[1,2,3,4,5,6,7,8,9,10]

console.log(myNumers.map((nums)=>nums+10));
//console.log(myNumers.map((nums)=>{ return nums+10}));

//Chaining

const myNums = myNumbers.map( (num) => num * 10 )
               .map( (num) => num + 1 ) /* Here, value will be taken from upper method. 
               eg. 1 * 10 = 10; 10 + 1 = 11 */
               .filter( (num) => num >= 40 ) // same as here
console.log(myNums); // Output: [ 41, 51, 61, 71, 81, 91 ] 