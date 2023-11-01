// Code your solution here

// findMatching- This function takes an array of drivers' names and a string as arguments, 
//and returns the matching list of drivers. The function should be case insensitive.

const drivers = ['Ada', 'Bob', 'Cathy', 'Dana'];

// For each driver's name, use the toLowerCase method to convert both the driver's name and the input string to lowercase for case insensitivity.
// Use the includes method to check if the lowercase driver's name includes the lowercase input string.
// Return the filtered array of matching driver's names.
// Here's an example implementation of the

function findMatching(drivers, string) {
    //This line is the heart of the function. It uses the filter method to iterate through the drivers array and return a new array containing 
    //only those drivers whose names contain the specified string. The use of toLowerCase() is to make the comparison case-insensitive. Here's how it works:
    // driver.toLowerCase() converts the name of each driver to lowercase.
    // string.toLowerCase() converts the specified string to lowercase.
    // driver.toLowerCase().includes(string.toLowerCase()) checks if the lowercase driver name contains the lowercase string.
    return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()));
}

console.log(findMatching(drivers, 'a'));

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.



function fuzzyMatch(drivers, query) {
    //create empty array
    const matchingDrivers = [];
    // setting up loop to cycle through all drivers
    for(let i=0; i < drivers.length; i++) {
    // for each driver i, check that is starts with the specified string
        if (drivers[i].startsWith(query)) {
            // if it does match with teh specified string, push that driver's name into the new array
            matchingDrivers.push(drivers[i])
        }
    }
    //After the for loop has finished iterating through all the drivers in the array, this line returns the matchingDrivers array, 
    //which now contains the names of drivers that start with the query
    return matchingDrivers;
}


// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: 
//name and hometown. The function should return each element whose name property matches the provided string argument.

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, query) {
    const matchingDrivers2 = [];
    for(let i=0; i < drivers.length; i++) {
        if (drivers[i].name === query) {
            matchingDrivers2.push(drivers[i]);
        }
  }
  return matchingDrivers2;
  };

  console.log(matchName(drivers2, 'Bobby'));