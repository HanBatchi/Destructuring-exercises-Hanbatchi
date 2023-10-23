
//What does the following code return/print?

/*let facts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846
};

let {numPlanets, yearNeptuneDiscovered} = facts;
console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
*/
//This code will return the number of planets discovered in the year 1846.


//What does the following code return/print?
/*let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?*/
// This code will return yearNeptuneDiscovered and yearMarsDiscovered.

//What does the following code return/print?
/*function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
Here it will return 'Your name it Alejando and youy like purple'
getUserData({firstName: "Melissa"}) // ?
Here it will return 'Your name it Melissa and youy like green'
getUserData({}) // ? 
In this case it will return 'Your name it undefined and youy like green'
*/

//ARRAY DESTRUCTURING
//What does the following code return/print?
/*let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?*/
//This code will return Maya, Marisa, and Chi.

//what do the following code return/print
/*
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ? */
//In the first console.log it will return Raindrops on roses, following by the second console.log it will return whiskers on kittens, following by the third that will return all the rest of the array.


//What does the following code return/print?
/*
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? */
// It will return [10, 30, 20]. Because we exchange the second element with the first element.

//ES5 Assigning Variables to Object Properties

const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const a = obj.numbers.a;
const b = obj.numbers.b;
/* Write an ES2015 Version */

const objES2015 = {
  numbers: {
    a: 1,
    b: 2
  }
};
const {aE2015,bE2015} = objES2015;

const arr = [1, 2];
const temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

/* Write an ES2015 Version */
const arrEs2015 = [1,2]
[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults()

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})