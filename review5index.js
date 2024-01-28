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

// const strGreaterThan5 = arrOfStr.reduce((acc, str) => {
//     if (str.length > 5) {
//         acc.push(str);
//     }
//     return acc;
// }, []

// return arrayOfstr.filter(str = str.length > 5)

// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

function stringsLongerThanfivee(arrOfStr){
    const stringslongerthanFive = [];

    for (const str of arrOfStr) {
        if (str.length > 5) {
            stringslongerthanFive.push(str.length);
        }
    }

    return stringslongerthanFive;
}

// const stringslongerthanFive =  arrOfStr.reduce((acc, str) => {
//     if (str.length > 5) {
//         acc.push(str.length);
//     } 

//     return acc;

// }, [] )


// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

function sumOfEven(arrOfNum) {
    let sum = 0;

    for (const num of arrOfNum) {
        if (num % 2 === 0){
            sum += num
        }
    }

    return sum;
}


// return arrOfNum.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0)


// 5. Write a function that takes an array of numbers and returns the min num

function findMin(arrOfNum) {
    return Math.min(...arrOfNum)
}


function findMin (arr) {
    let min = infinity;

    for (const num of arrofNum) {
        if ( num < min) {
            min = num;
        }
    }

    return min;
}
// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)

function GetMostletterCount(inputStr) {
    for (const str of inputStr) {}
}