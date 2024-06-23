
//const appUser=new Object() singleton
const appUser={} //non singleton object
appUser.id="alwaysaman"
appUser.name="Aman"
appUser.isLoggedIn= false
//console.log(appUser);

const regularUser={   //example of object in an object
    email:"some@gmail.com",
    fullnaame:{
        userfullname:{
            firstname:"aman",
            lastname:"kumar"
        }
    }
}
//console.log(regularUser.fullnaame.userfullname);

//combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
//console.log(obj3); //{obj1: {…}, obj2: {…}}
const obj4=Object.assign({},obj1,obj2)
//console.log(obj4);

const obj5={5:"a",6:"b"}
const obj6=Object.assign({},obj1,obj2,obj5)
//console.log(obj6);

//using spread operator
const obj7={...obj1,...obj2}
//console.log(obj7);

//if we define an array of objects than we can access each index
const arr=[myuser={name:"Aman"},23,21,45]
//console.log(arr[0].name); //output-Aman

/*console.log(appUser);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty('isLoggedIn')); //output-true
*/
//destructuring of objects-it is a way through which keys in an object can be accessed easily

const course={
    coursename:"javascript",
    price: "999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor
const {courseInstructor}=course //or const {courseInstructor: instructor}=course here name of key is changed
console.log(courseInstructor);  //console.log(Instructor);