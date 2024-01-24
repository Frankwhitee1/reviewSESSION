// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

function eachWordCaptialized(inputStr) {
    return inputStr.split(" ").map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(" ");
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
  
// function formattedStr(arrOfObj, targetId, ) {
//     for (const obj of arrOfObj) {
//         const occupation = obj.occupation;
//         const firstName = obj.firstName;
//         const lastName = obj.lastName
//         if (obj.id === targetId) {

//             return `Hello ${firstName} ${lastName}, have a great day at your job as a ${occupation}`;
//         }
//     }
//     return `nothing found`;
// }
// O(n) n is the number of elements because it itterates thru the arr once using the for of 



function formattedStr({firstName, lastName, occupation, id }, targetId) {
if (id === targetId) {
 return `Hello ${firstName} ${lastName}, have a great day at your job as a ${occupation}`;
}
return `nothing found`;
}


const arrayOfObjects = [
    { id: "Tfjso_4M", firstName: "John", lastName: "Klaus", occupation: "Carpenter" },
    { id: "RgkPq_8Z", firstName: "Alice", lastName: "Smith", occupation: "Software Engineer" },
    { id: "BhLmN_2X", firstName: "David", lastName: "Jones", occupation: "Teacher" },
    { id: "PxYqZ_5R", firstName: "Emily", lastName: "Taylor", occupation: "Graphic Designer" },
    { id: "AaBbC_7D", firstName: "Michael", lastName: "Brown", occupation: "Chef" },
    { id: "KlMnO_3P", firstName: "Sophia", lastName: "Davis", occupation: "Electrician" },
    { id: "QwErT_6S", firstName: "Ethan", lastName: "Miller", occupation: "Nurse" },
    { id: "XyZ_9U", firstName: "Olivia", lastName: "Wilson", occupation: "Architect" },
    { id: "HgFd_1J", firstName: "Daniel", lastName: "Anderson", occupation: "Plumber" },
    { id: "VbNm_0K", firstName: "Ava", lastName: "White", occupation: "Marketing Specialist" }
  ];


console.log(formattedStr(arrayOfObjects, "RgkPq_8Z" ));
  
  /* Example Object
  {
    id: "Tfjso_4M"
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  
  
  
  
  
  
  
  
  
  
  Message 10-6_mod_1_review
  '*/