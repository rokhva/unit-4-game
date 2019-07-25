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

    var crystal1 = 3;
    var crystal2 = 5;
    var crystal3 = 4;
    var crystal4 = 9;
    var currentScore = 0;
    var randomTargetNumber;
    var numbersArr =[30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    var crystalNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,]
    
    $("#crystalOne").click(function(event){
            currentScore = currentScore + crystal1;
    
            console.log(currentScore)
            $("#currentScore").text(currentScore);
    })
    
    function setUp(){
            //set current score to 0
            // random target
            // four random numbers for crystals.
    
            currentScore = 0;
            randomTargetNumber = Math.floor(Math.random()*50) + 30;

            // chosenWord = words[Math.floor(Math.random() * words.length - 1) + 1];
            // console.log(chosenWord);

            //add jQuery here for the random target number to update

            //look up how to randomly choose from two arrays
            crystal1 = Math.floor(Math.random());
            console.log(crystal1)
    }
    
    setUp();