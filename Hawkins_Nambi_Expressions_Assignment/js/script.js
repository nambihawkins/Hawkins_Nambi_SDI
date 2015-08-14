//Nambi Hawkins
//August 13, 2015
//Expressions Assignment

var weekOne = prompt("Enter Tyler's time for week 1."); //asking user for week 1 time
var weekTwo = prompt("Enter Tyler's time for week 2."); //asking user for week 2 time
var weekThree = prompt("Enter Tyler's time for week 3."); //asking user for week 3 time
var weekFour = prompt("Enter Tyler's time for week 4."); //asking user for week 4 time
var weekFive = prompt("Enter Tyler's time for week 5."); //asking user for week 5 time
var weekSix = prompt("Enter Tyler's time for week 6."); //asking user for week 6 time
var weekSeven = prompt("Enter Tyler's time for week 7."); //asking user for week 7 time

var recordedTimes = [Number(weekOne), Number(weekTwo), Number(weekThree), Number(weekFour), Number(weekFive), Number(weekSix), Number(weekSeven)]; //Entered in the Tyler's weekly times as an array, since the result for a prompt is returned as a string, I had to convert it to a number
recordedTimesTotal = recordedTimes[0] + recordedTimes[1] + recordedTimes[2] + recordedTimes[3] + recordedTimes[4] + recordedTimes[5] + recordedTimes[6]; //I totalled up the times in the array


var goal = 12; //set goal speed in order to get accepted into college
var numberOfRecordedTimes = recordedTimes.length; //found number of pieces of data in the array

numberOfRecordedTimes ++; //added 1 to the original pieces of data in array to account for missing time

target = (goal * numberOfRecordedTimes) - recordedTimesTotal; //calculated time Tyler needed to reach for his last run in order to meet his goal

console.log("In order for Tyler to have hit his goal of" + " " + goal + "mph, he would have had to run" + " " + target + "mph in his final race."); //concatenate results into a sentence explaining the outcome needed for Tyler to reach his goal
