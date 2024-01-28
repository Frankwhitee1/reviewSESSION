// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length

function stingLength(arrOfStrings) {
    const newArr = []
    for (const str of arrOfStrings) {
        newArr.push(str.length)
    }
    return newArr;
}

// return arrOfStrings.reduce((acc, str) => (acc.push(str.length),acc), []);



// ["hello", "world"] => [5, 5] 

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

function strGreaterThan5(arrOfStr) {
    const ArrOfStr = [];

    for(const str of arrOfStr) {
        if (str.length > 5 ) {
            ArrOfStr.push(str);
        }
    }

    return ArrOfStr;
}

// return arrOfStr.reduce((acc, str) => {
//     if (str.length > 5) {
//         acc.push(str);
//     }
//     return acc;
// }, []

// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters



// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)