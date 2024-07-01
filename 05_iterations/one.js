//for loop
//for(initialisation,condition,increment/decrement)
for (let index = 0; index <=10; index++) {
    const element = index;
    console.log(element); 
}
//if statment inside for loop,

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
} /* Output: prints number from 1 to 4 but when its comes on 5 it prints '5 is the 
best number' and then prints numbers 5 to 10.
*/
//loop inside loop

for (let i = 2; i <= 10; i++) {
    console.log(`Table of ${i} is:`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ':' + i*j);
    }
} // Output: It will print Tables from 2 to 10.

/* Note: In this upper Loop when outer loop runs one time then inner loop runs 10 times. */

//array with loops

let myArr = ["IronMan", "Thor", "Captain America"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}
/* Note: As we know array index starts from 0 (index = 0) and here myArr.length is 3. So, it 
will run from 0 index to 2 which is less than 3 (index < myArr.length) */

//Break & Continue Keywords

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5");
        // break 
        // Note: When (i == 5) then break will break the control flow.
        continue
        // Note: On 5, prints the console.log then after that continues with 6 to 10.
    }
    console.log(`value of i is ${i}`);
}