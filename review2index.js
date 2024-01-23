// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

function eachWordCaptialized(inputStr) {
    return inputStr.toUpperCase()
}

console.log(eachWordCaptialized("hello crazy world"));
console.log(eachWordCaptialized("i want to sleep "));


// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 
function formatGreeting({firstName, lastName, occupation}) {
    return `Hello ${firstName} ${lastName}, have a great day at your job as a ${occupation}`;
}

// O(1)

const john = {
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  const rebecca = {
    firstName: "Rebecca",
    lastName: "Cohen",
    occupation: "Teacher"
  }
  
  console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")
  
  console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")
  
  // 3.----------------------------------
  // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
  
q
  
  /* Example Object
  {
    id: "Tfjso_4M"
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  
  
  
  
  
  
  
  
  
  
  Message 10-6_mod_1_review
  '*/