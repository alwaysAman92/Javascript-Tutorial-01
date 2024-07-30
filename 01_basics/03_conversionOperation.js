let digit="123";
console.log(typeof digit);
console.log(typeof(digit));  //methods to check datatype of variables
let valueInnumber=Number(digit);//converts the above string into number datatype
console.log(typeof(valueInnumber)); 
/* when null is converted into number it becomes 0
when string like "123abc" is converted into number it becomes NaN(not a number)
     undefined becomes NaN
     boolean values like true becomes 1
     boolean conversion--
     1-true
     0-false
     ""-false(empty string)
     "aman"-true
     */