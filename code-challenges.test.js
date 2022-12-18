// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibMaker", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibMaker(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibMaker(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// Input: a number
// Output: an array that is the length of the inpoutted number where each element follows the Fibonacci sequence

// Declare a function called "fibMaker" that takes a number as an arguement
// Create an empty array
// Create a for loop that ititializes at 1 
// Have the function statement push every iteration into the empty array and then add the result to itself for the next iteration

const fibMaker = (number) => {

  let array = [1, 1]

  for (let i = 1; i < number - 1; i++) {
    array.push(array[i] + array[i - 1])
  }
  return array
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
  // Expected output: [10, 15, 20, 45, 60, 65, 100]


  describe("studyBuddy", () => {
    it("takes in an object and returns an array of the values sorted from least to greatest", () => {
      expect(studyBuddy(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect(studyBuddy(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
  })


// b) Create the function that makes the test pass.

// PSEUDOCODE:
// Input: object with named keys and number values
// output: an array of the values sorted from least to greatest

// Declare a function called "studyBuddy" that takes an object as an argument
// Extract the values from each property in the object
// Create an array of number from the extracted values
// Sort the array from least to greatest

const studyBuddy = (studylog) => {
return Object.values(studylog).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("arraySum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(arraySum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arraySum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arraySum(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE
// Input: an aray of numbers
// Output: an array of the accumlating sums of the original values of the inputted array's elements

// Declare a function called "arraySum" that takes an array as an argument
// Check to see if the array is not empty
// If the array is not empty, map through the elements
// Start a counter at zero, then add the value of each element and add that value to each subsequent element
// If the array is empty, return an empty array

const arraySum = (array) => {
  return array.length > 0 ? array.map((sum = 0, n => sum += n)) : []
}