//To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.
// Determine whether an entrant qualifies based on his weight.

//Given:
//Competitor’s weight.

//Result:
//“The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!”

//declaring myWeight as a variable with the value of 214
//var myWeight = 214;

//qualifying = (myWeight >= 250) ? "The competitor qualifies for the heavyweight division." : "The competitor needs to gain some weight!";
//setting up a ternary operation for the problem, setting the answer to qualifying

//printing out the result to console
//console.log(qualifying);





//Celsius to Fahrenheit converter
//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered.
//If the user puts a “C” for the unit, the calculator should convert to Celsius.
//If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

//Given:
//Degrees (in F or C)
//Unit (a string holding an "F" or a "C")

//Result:
//“The temperature is X degrees Celsius.”
//Or “The temperature is X degrees Fahrenheit.”

//Data Sets to test: (Note that data sets are not the only numbers that should work with your code.)
//32F is 0C
//100C is 212F
//90F is 32.22C

var degrees = prompt("Please enter the temperature you would like to convert.");
var units = prompt("Is this measurement in degrees Fahrenheit or degrees Celcius? Please enter F or C.");
//asking user to enter in degree amount as well as units


if (units === "F") {
//units needs to be exactly equal to the string F
    C = (Number(degrees) - 32) * (5/9);
//convert F to C if the user enters F degrees
    console.log("The temperature is " + C + " degrees Celsius.");
//print answer to console
    alert("The temperature is " + C + " degrees Celsius.");
//display answer in pop up window
} else if (units === "C") {
//untits needs to be exactly equal to the string C
    F = Number(degrees) * 9/5 + 32;
//convert C to F if user enters C degrees
    console.log("The temperature is " + F + " degrees Fahrenheit.");
//print answer to console
    alert("The temperature is " + F + " degrees Fahrenheit.");
//display answer in pop up window
}
else {
//if the user enters in anything but C or F the code will not recognize it
    console.log("Please enter a valid unit of measurement");
//print answer to console
    alert("Please enter a valid unit of measurement");
//display answer in pop up window
}






