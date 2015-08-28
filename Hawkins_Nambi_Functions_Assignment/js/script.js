//Nambi Hawkins
//Scalable Data Infrastructures, August Section 1
//August 27, 2015
//Functions Assignment

var userOption = prompt("Would you like to run Powerball Lottery numbers? \nType Yes to play. Leave blank for Florida Lottery!");
//asking user which set of random numbers they would like displayed and setting their option as a variable

function choice(fOrP) { //creating a function for the option the user chooses

    var pass = 1; //variable for number of times user passes the option to run powerball numbers

    while (fOrP === "") { //loop to make sure the user wants to skip Powerball and play Florida Lottery instead

        fOrP = prompt("Are you sure you want to play the Florida Lottery?"); //Confirming the user's choice

        pass++; // pass = pass + 1

        if (pass === 2) { //conditional, if the user passes up Power ball twice then we run Florida Lottery numbers

            console.log("You chose to play the Florida Lottery!"); //letting user know their choice

            break; //stop loop
        }
    }
    console.log("Let's get your numbers!"); //letting user know the numbers are about to run
}

choice(userOption); //running the function

var powerBallFirst = lottery(1, 59, 5); //parameter for first 5 numbers of powerball
var powerBallLast = lottery(1, 35, 1); //parameter for last number of powerball
var floridaSix =  lottery(1, 53, 6); //parameter for 6 numbers of Florida lottery



