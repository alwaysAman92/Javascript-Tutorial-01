const myNums=[1,2,3,4,5]

const myTotal=myNums.reduce(function (acc,currval) {
   console.log(`acc: ${acc} and currval:${currval}`);
    return acc+currval 
},0)

console.log(myTotal);

/*output-
acc: 0 and currval:1
acc: 1 and currval:2
acc: 3 and currval:3
acc: 6 and currval:4
acc: 10 and currval:5
15 */

/*--------------------------------------------------------------------
'Reduce' in Arrow function */

const NewTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

console.log(NewTotal); /* Output: 6 

/*--------------------------------------------------------------------
Real life example */

const shopppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shopppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay); // Output: 22996 */