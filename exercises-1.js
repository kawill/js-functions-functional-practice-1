//  Part I

/**
 * use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback) {
    // YOUR CODE HERE
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a) {
    total *= a;
});
// and finally assert; if this fails, the program stops
console.assert(total === 24);
// console.log(total);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum() {
    // parse arguments into an array
    "use strict";

    var args = [].slice.call(arguments);

    var total = 0;
    args.forEach(function(number, i) {
        total += number;
    });

    return total;

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert(sum(1, 2, 3, 4, 5) === 15)

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average() {
    // parse arguments into an array
    "use strict";
    var args = [].slice.call(arguments);



    var total = 0;
    args.forEach(function(number, i) {
        total += number;
    });
    total /= args.length

    return total;

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert(average(2, 4, 6, 8) === 5)

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest() {
    // parse arguments into an array
    "use strict";
    var theLargestNumber = 0;
    var args = [].slice.call(arguments);
    args.forEach(function(number) { //number, i, array so use number or array[i]
        if (number > theLargestNumber) { //theLargestNumber < number
            theLargestNumber = number;
        }
    })
    return theLargestNumber;
    // for (var i = 0; i< arguments.length; i++)
    // arguments.forEach(function(max) {

    // });
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert(largest(2, 4, 6, 8) === 8) //should this be 8?

// // 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest() {
    // parse arguments into an array
    "use strict";
    var theLongestWord = '';
    var args = [].slice.call(arguments);
    args.forEach(function(word) {
        if (word.length > theLongestWord.length) {
            theLongestWord = word;
        }

    })
    return theLongestWord.length;
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert(longest('bill', 'court', 'olivia', 'chicken') === 7)

// // 5. write a function that can sort an array of Date objects (returns a NEW ARRAY of Date's)

function sort() {
    // parse arguments into an array
    var args = [].slice.call(arguments);
    args.sort(function(a, b) {
        // if (a>b) return true;
        // else return false;
        return a > b;
    });
    return args
        // .. do something with each element of args
        // YOUR CODE HERE
}

var dates = [
    new Date("Oct 2, 2015"),
    new Date("Oct 1, 2015"),
    new Date("Jan 2, 2015"),
    new Date("Dec 5, 2014"),
    new Date("Mar 27, 2015")
]

var sorted = sort(dates[0], dates[1], dates[2], dates[3], dates[4]);
// console.log(sorted)
console.assert(
    sorted[0] === dates[3] &&
    sorted[1] === dates[2] &&
    sorted[2] === dates[4] &&
    sorted[3] === dates[1] &&
    sorted[4] === dates[0]
)

// /**
//  * PART II
//  *
//  * For each of the following Array methods,
//  *
//  * 1. use them in an example
//  * 2. write a console.assert to test them
//  */

// // .sort()
var numbers = [33, 98, 58, 47]
numbers.sort(function(a, b) {
    return a > b;
});
// console.log(numbers);

console.assert(numbers[0]===33 && numbers[1]===47 && numbers[2]===58 && numbers[3]===98)


// // .concat()
var city = ['Austin', 'Dallas', 'Houston'],
    home = ['house', 'apartment', 'condo'],
    pets = ['dog', 'cat', 'bird'];

var choices = pets.concat(home, city);
// console.log(choices);

console.assert(choices[0]==='dog' && choices[1]==='cat' && choices[2]==='bird' && choices[3]==='house' && choices[4]==='apartment'&& choices[5]==='condo' && choices[6]==='Austin' && choices[7]==='Dallas' && choices[8]==='Houston')


// // .indexOf()
var nums = [509, 20, 3000];
var index = nums.indexOf(3000);
// console.log(index);
console.assert(index===2);



// // .split()
var j = "Welcome to Texas you guys.";
var jj = j.split(" ");

// console.log(jj);
console.assert(jj[0]=== 'Welcome' && jj[1]==='to' && jj[2]==='Texas' && jj[3]==='you'&& jj[4]==='guys.' );



// // .join()
var teams = new Array ('Saints', 'Tigers', 'Pelicans');
var myTeams1 = teams.join('+');

// console.log(myTeams1);
console.assert(myTeams1 ==='Saints+Tigers+Pelicans');


// // .pop()
var myPets = ['dog', 'cat', 'bird'];
// console.log(myPets);
var popped = myPets.pop();

// console.log(myPets); //['dog', 'cat']
// console.log(popped); //bird
// console.log(myPets[2]); //undefined
console.assert(myPets[0]==='dog' && myPets[1]==='cat' && myPets[2]===undefined);


// // .push()
var meals = ['breakfast', 'lunch'];
var total = meals.push('dinner', 'snack');

//console.log(meals); //['breakfast', 'lunch', 'dinner', 'snack']
console.assert(meals[0]==='breakfast' && meals[1]==='lunch' && meals[2]==='dinner' && meals[3]==='snack');


// // .slice()
var desserts = ['cake', 'cookies', 'gelato', 'sorbet'];
var favorites = desserts.slice(1,3);

// console.log(favorites);
console.assert(favorites[0]==='cookies' && favorites[1]==='gelato');


// // .splice()
var myOutfit = ['dress', 'boots', 'jacket', 'purse'];
var removed = myOutfit.splice(2,1);

// console.log(removed); //['jacket']
// console.log(myOutfit); //['dress', 'boots', 'purse']
console.assert(myOutfit[0]==='dress' && myOutfit[1]==='boots' && myOutfit[2]==='purse');


// // .shift()
var myPaint = ['teal', 'black', 'silver', 'green'];
// console.log(myPaint); //['teal', 'black', 'silver', 'green']
var shifted = myPaint.shift();
// console.log(myPaint); //['black', 'silver', 'green']
// console.log(shifted); //teal
console.assert(myPaint[0]==='black'&& myPaint[1]==='silver' && myPaint[2]==='green');


// // .unshift()
var arr = [98, 99];
arr.unshift(97);

//console.log(arr);//[97, 98, 99]
console.assert(arr[0]===97 && arr[1]===98 && arr[2]===99);



// // .filter()
function isLarger(element) {
    return element >=60;
}
var filtered = [120, 55, 99, 40].filter(isLarger);

//console.log(filtered); //[120,99]
console.assert(filtered[0]===120 && filtered[1]===99);

// // .map()
var numbers = [1, 3, 5];
var triples = numbers.map(function(num){
    return num * 3;
});

//console.log(numbers); //[1, 3, 5]
//console.log(triples); //[3, 9, 15]
console.assert(numbers[0]=== 1 && numbers[1]=== 3 && numbers[2]=== 5 && triples[0]=== 3 && triples[1]=== 9 && triples[2]=== 15);

// /**
//  * PART III
//  *
//  * Fill in the sections below marked 'YOUR CODE HERE'.
//  *
//  * The code below should find all customers whose first-names start with 'J',
//  * map() those people into an array of objects that have a name property:
//  *
//  * i.e. { name : c.firstname + " " + c.lastname }
//  *
//  * then sort them alphabetically
//  */

// // set up arrays
// var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
// var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

// var customers = [{
//     firstname: 'Joe',
//     lastname: 'Blogs'
// }, {
//     firstname: 'John',
//     lastname: 'Smith'
// }, {
//     firstname: 'Dave',
//     lastname: 'Jones'
// }, {
//     firstname: 'Jack',
//     lastname: 'White'
// }];

// console.log(customers);

// var projections = customers
// .filter(function(c) {
//     // YOUR CODE HERE
// })
// .map(function(c) {
//     // YOUR CODE HERE
// })
// .sort(sortByName);

// function sortByName(c1, c2) {
//     "use strict";
//     //...
// }

// console.log(projections);
