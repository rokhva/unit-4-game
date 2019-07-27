// PSEUDO CODE

//A rondom target number will be chosen
//Random target number needs to be displayed
//Crystals 1-4 will each be assigned a random value (which they will keep for the duration of the round)
//current score will start at zero
//Wins and losses will start at zero as well
//On click the random crystal value will be added to the current score value
//IF the current score is greater than the target score 
//losses will increase by one
//game will reset (start at line 3)
//update screen
//IF the current score equals the target number
//wins will increase by one
//game will reset and (start at line 3)
//update screen

// _________________________________________________________________________________________________________________________________________________________________________//

// BEST GUESS FOR HOW TO BREAK UP

//Math.random function 
//for choosing the random target number & the number assigned to the crystals
//How to assign random numbers to the crystals??
//And make sure they keep the same value

//On click listener for each time a crystal is clicked
//variable to store the number assigned to the crystal to add it to the current score
//update screen

// _________________________________________________________________________________________________________________________________________________________________________//

var wins=0;
var losses=0;
var crystal1;
var crystal2 = 5;
var crystal3 = 4;
var crystal4 = 9;
var currentScore = 0;
var randomTargetNumber;
var numbersArr = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
var crystalNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,]

$("#crystalOne").click(function (_event) {

    //adds crystal number value to current score
    currentScore = currentScore + crystal1;

    //updates current score
    $("#currentScore").text(currentScore);

    won();
   

})



$("#crystalTwo").click(function (_event) {

    //adds crystal number value to current score
    currentScore = currentScore + crystal2;

    //updates current score
    $("#currentScore").text(currentScore);

    won();
})


$("#crystalThree").click(function (_event) {

    //adds crystal number value to current score
    currentScore = currentScore + crystal3;

    //updates current score
    $("#currentScore").text(currentScore);

    won();
})


$("#crystalFour").click(function (_event) {

    //adds crystal number value to current score
    currentScore = currentScore + crystal4;

    //updates current score
    $("#currentScore").text(currentScore);

    won();
})




function setUp() {
    //set current score to 0
    // random target
    // four random numbers for crystals.

    currentScore = 0;

    //chooses random number for the user to try to match
    randomTargetNumber = numbersArr[Math.floor(Math.random() * numbersArr.length - 1) + 1];
    $("#targetNumber").text(randomTargetNumber);


    //assigns a random number value to crystal one
    crystal1 = crystalNumArr[Math.floor(Math.random() * crystalNumArr.length - 1) + 1];
    console.log(crystal1 + "c1");

    //assigns a random number value to crystal two
    crystal2 = crystalNumArr[Math.floor(Math.random() * crystalNumArr.length - 1) + 1];
    console.log(crystal2 + "c2");

    //assigns a random number value to crystal three
    crystal3 = crystalNumArr[Math.floor(Math.random() * crystalNumArr.length - 1) + 1];
    console.log(crystal3 + "c3");

    //assigns a random number value to crystal four
    crystal4 = crystalNumArr[Math.floor(Math.random() * crystalNumArr.length - 1) + 1];
    console.log(crystal4 + "c4");
    

}

setUp();





console.log(wins);
console.log(losses);
function won() {

    if (randomTargetNumber === currentScore){
        wins++;
        $("#wins").text(wins);
        reset();
        setUp();
      
    } else if (currentScore > randomTargetNumber){
        $("#losses").text(losses);
        losses++;
        reset();
        setUp();
        
    }
}

function reset() {
    currentScore = 0;
}