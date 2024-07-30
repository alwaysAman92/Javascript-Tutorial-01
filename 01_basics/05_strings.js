const name="Aman"
const repocount=50
//console.log(name + repocount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName=new String(`AlwaysAman`)//other way to declare strings
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-5,4));//can take negative values as in reverse
//trim is used to remove spaces from start and end
//write an article on types of methods used with strings in javascript
const url="https://aman.com/aman%20sinha";
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(name.split('a'));