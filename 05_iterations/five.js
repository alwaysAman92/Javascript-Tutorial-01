//for each
const coding=["js","ruby","java","python","cpp"]
/*
coding.forEach(function (item){
    console.log(item); 
}) */
//using arrow function
/*coding.forEach((item) =>{
    console.log(item);
})*/
//using predefined function

function printme(item) {
    console.log(item);
}
coding.forEach(printme)

coding.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
} )
/* Output: js 0 [ 'js', 'python', 'java', 'C++' ] and so on 

-------------------------------------------------------------------------------------------------------
'For each' on Objects in Array */

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
]

myCoding.forEach( (lang) => {
    console.log(lang.langFileName);
} )