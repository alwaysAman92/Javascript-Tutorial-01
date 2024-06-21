const marvel_heroes=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heroes.push(dc)
/*console.log(marvel_heroes);//output-
console.log(marvel_heroes[3]);//output-
console.log(marvel_heroes[3][1]);//output-*/

const newheroes=marvel_heroes.concat(dc)
//console.log(newheroes);

//one more method to add two or more arrays is spread method

const allheroes=[...marvel_heroes,...dc]
//console.log(allheroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) //flat accepts maximum depth subarrays have
//console.log(real_another_array);

console.log(Array.isArray("Aman"));//to check if given datatype is array
console.log(Array.from("Aman"));//converts given datatype to array
console.log(Array.from({name:"Aman"})) //here the function is unable to convert the given object to array thus returns an empty array

//convert set of elements into array
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))