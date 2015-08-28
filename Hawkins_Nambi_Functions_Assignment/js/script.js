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


function lottery(n, x, m) { //created function to obtain rancom lottery numbers
    var random = []; // setting a matrix for random numbers

    for (var a = 0; a < m; a++) // created function to start and stop the random number process after a certain number of inputs
        random[a] = Math.floor(Math.random() * (x - n)) + n; // equation for random numbers

    return random //outputting the variable for the random number matrix
}

if (userOption === "") { //if statement for if the user chooses florida Lottery
    console.log("Your Florida Lottery numbers are " + floridaSix + "."); // printing out the lottery results
}
else {//else statement for Powerball results
    console.log("Your Powerball numbers are " + powerBallFirst + ", with a final number of " + powerBallLast + ".");//giving the user Powerball results if that option was selected

}
