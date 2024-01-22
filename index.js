// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given ab array of numbers and a given target. return the target if it's in the array or undefined if it's not

function getTarget(arr, target) {
    
    for(let i = 0; i < arr.length; i ++) {
        if (arr[i] === target) {
           return arr[i];
        }
    }
    return undefined;
}

// return arr.find((num) => num === target) another solution**

console.log(getTarget([2,3,4,5,6,7,8,], 8)); // 8
console.log(getTarget(['apple', 'orange', 'banana', 'apple'], 'apple')); // apple


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14


function firstBiggerNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 14) {
            return arr[i]
    }
 }
return undefined;
}

// return arr.find((num) => num > 14); another way to use it 
console.log(firstBiggerNum([5,9,11,23,10]));
console.log(firstBiggerNum([10,11,15,20,5]));

// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found


function strGreaterThanfour(arr) {
    for (let i = 0; i < arr.length; i++) {
        if  (arr[i].length > 4) {
            return arr[i];
        }
    }
    return undefined;
} 

// arr[i].length > 4 ? arr[i] : undefined another attempt 

console.log(strGreaterThanfour(['dog','cat','razzE','car','redBird']));// razzE, 
console.log(strGreaterThanfour(["apple", "banana", "kiwi", "pear"])); // apple, 


// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/

function getCorrectTargetId(objs, targetid) {
    for(let obj of objs) {
        if (obj.id === targetid ) {
            return obj
        }
    }
    
    return undefined;
}





// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/

function getNameInObj(objects, targetid) {
    for ( const obj of objects) {
        const name = obj.name
        if (obj.id === targetid) {
            return {name};
        }

    }
}
// Message 10-6_mod_1_review









