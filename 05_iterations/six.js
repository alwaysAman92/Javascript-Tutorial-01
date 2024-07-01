const coding=["js","ruby","java","python","cpp"]

/*const values=coding.forEach((items)=>{
    console.log(items);
})*/

/* Note: So now we know that 'for each' doesn't return any value, either we use return keyword or not.

------------------------------------------------------------------------------------------------------
Filter */

const myNums=[1,2,3,4,5,6,7,8,9,10]

/*console.log(myNums.filter((num)=> num>4))
//output-(6) [5, 6, 7, 8, 9, 10]

const number = myNums.filter( (val) => { // Scope Open
    return val > 4 // 03_Basics/05_arrow.js, Explicit return
} )
console.log(number); // Output: [ 5, 6, 7, 8, 9, 10 ] */

const newNums=[]

myNums.forEach((num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const collec=books.filter((bks)=>bks.genre=="Fiction")
console.log(collec.forEach(book => console.log(book)));

