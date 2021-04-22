console.log("----------------------------");

// Checking if a number is big:
const compairNumbers = function(number) {
    if (number > 100){
        return true;
    }
    if (number <= 100){
        return false;
    }
};

const result = compairNumbers(101);
console.log(result);


// Bouncer at a club
const bouncerBrenda = function(age, current, max){
    if (age < 21){
        return "this is a club for adults";
    }
    if (current < max){
        return "come in";
    }
    if (current > max){
        return "it's too busy now, com back later";
    }
    
};

const ageVisitor = 19;
const currentVisitors = 200;
const maxVisitors = 300;
const brendaSais = bouncerBrenda(ageVisitor, currentVisitors, maxVisitors);
console.log(brendaSais);


// calculating the average
const calculateAverage = function(numbers){
    const average = numbers.reduce((total, n) => total + n) / numbers.length;  
    return average;
};

const grades = [6,7,8,9,9];
const averageGrades = calculateAverage(grades);
console.log(Math.round(averageGrades));

const ages = [2,4,7,13,22];
const averageAge = calculateAverage(ages);
console.log(Math.round(averageAge));

const seconds = [55,34,48,33,40];
const averageSeconds = calculateAverage(seconds);
console.log(Math.round(averageSeconds));


/*
const paintWall = function(Location, Color){ // de volgorde hiervan is belangrijk, anders draait hij het om. 
    console.log("The " + Location + "-wall has been painted " + Color)
};

paintWall("livingroom", "green"); */

/* of zo geschreven:
const wall = "kitchen";
const color = "red";
paintWall(wall, color); 


bij alleen 1 argument:
paintWall("red"); of
paintWall("green"); */



/* TUTORIAL NOTITIES:

// VOORBEELD FUNCTION ARGUMENT STRING:
const heat = function(item) {
    console.log("I'm heating " + item);
    // lot of code
    // lot of code
    // lot of code 
    console.log("Ping! Your " + item + " is heated.")
};

const main_course = "pasta";
const dessert = "cake"

heat("popcorn"); // passing an argument to a funciton 
heat("milk");
heat (main_course); // je kunt dus ipv een string ook een variable naar de function sturen. 
heat (dessert);

// VOORBEELD FUNCTION ARGUMENT NUMBER:
const multiply = function(numberA, numberB) { // voorbeeld multiple arguments
    console.log(numberA * numberB);
};

multiply (3, 4); // voorbeeld multiple arguments 

const age = 5;
const dogYearsFactor = 7;
multiply(age, dogYearsFactor);

// VOORBEELD ARRAY IN EEN FUNCTION:

// calculate average
const calculateAverage = function(numbers) { // tussen de haakjes zet je numbers ipv grades omdat je die functie misschien ook voor andere dingen dan grades gebruikt. 
    const average = numbers.reduce((total, n) => total + n) / numbers.length; // advanced code. Hoef ik nog niet te weten. 
    console.log(average);

};

const grades = [6,7,8,9,5,6,7,8,];
calculateAverage(grades);

*/