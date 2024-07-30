const accountId=14423
var accountEmail="aman@google.com"
let accountPassword="12345"
accountcity="jamshedpur"
let accountroll
//accountId=13242 not allowed 
console.table([accountEmail,accountId,accountroll,accountPassword]);
/* const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)
example-{                            {
        var x=10                            let x=10
        var x=20                            let x=20
        console.log(x);                     console.log(x);
        it is allowed no error              it is not allowed gives syntax error
}                                   }
        */
       //documentation preferred-mdn,t39