//ways to declare objects-as a literal and as a constructor

// singleton or through constructors

//object literals
const JsUser={
    name:"Aman",
    "Full name":"Aman kumar Sinha",
    age:20,
    location:"jamshedpur",
    email:"aman@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thursday"]
}// genreally keys in javascript are of string type or symbol type
 
//accessing values of objects

//console.log(JsUser.email);
//console.log(JsUser["email"]);//this method is preferred because when key is declared in double quotes the first method to
                             //access doesn't work

 //console.log(JsUser["Full name"]);

 //using symbols as keys
 const mySym=Symbol("key1")
 //now when you want to use symbols as keys instead of
 //mySym:"value" use [mySym]:"value" or else key datatype remains string
 const newobj={
    [mySym]:"value",
    name:"Aman"
 }
 //console.log(newobj[mySym]);

 //to override value of a key in object
 newobj[mySym]="new value"
 JsUser.email="aman@chatgpt.com"
 //console.log(newobj[mySym]);
 //console.log(JsUser["email"]);

 //to freeze values of an object so that it can not be modified
 //Object.freeze(JsUser)

// console.log(newobj);

//to add functions to an object
newobj.greeting= function(){
    console.log("Hello there");
}
console.log(newobj.greeting);
console.log(newobj.greeting());

newobj.greetingtwo=function(){
    console.log(`Hello there,${this.name}`);
}
console.log(newobj.greetingtwo());