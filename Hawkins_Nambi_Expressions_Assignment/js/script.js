//Nambi Hawkins
//August 13, 2015
//Expressions Assignment

alert("Tyler has been keeping track of his weekly race speeds " +
    "during his 100m sprints for the past 7 weeks. On the 7th week Tyler " +
    "had hurt his leg, but still decided to run. Temple University wants to " +
    "give Tyler a full scholarship if he can run at least 12mph. His recorded race " +
    "speeds are week 1 (12mph), week 2 (11 mph), week 3 (12mph), week 4 (11mph), " +
    "week 5 (13mph), week 6 (14mph), week 7 (9mph). Tomorrow is Tyler's final race. " +
    "What speed does he have to get in order for his average to be 12mph? \n \nRecord the " +
    "times above and use them in determining Tyler's goal speed."); //giving the user the problem to be solved

var weekOne = prompt("Enter Tyler's time for week 1."); //asking user for week 1 time
var weekTwo = prompt("Enter Tyler's time for week 2."); //asking user for week 2 time
var weekThree = prompt("Enter Tyler's time for week 3."); //asking user for week 3 time
var weekFour = prompt("Enter Tyler's time for week 4."); //asking user for week 4 time
var weekFive = prompt("Enter Tyler's time for week 5."); //asking user for week 5 time
var weekSix = prompt("Enter Tyler's time for week 6."); //asking user for week 6 time
var weekSeven = prompt("Enter Tyler's time for week 7."); //asking user for week 7 time
var recordedTimes = [Number(weekOne), Number(weekTwo), Number(weekThree), Number(weekFour), Number(weekFive), Number(weekSix), Number(weekSeven)]; //Entered in the Tyler's weekly times as an array, since the result for a prompt is returned as a string, I had to convert it to a number
var goal = 12; //set goal speed in order to get accepted into college
numberOfRecordedTimes = recordedTimes.length; //found number of pieces of data in the array

recordedTimesTotal = recordedTimes[0] + recordedTimes[1] + recordedTimes[2] + recordedTimes[3] + recordedTimes[4] + recordedTimes[5] + recordedTimes[6]; //I totalled up the times in the array

numberOfRecordedTimes ++; //added 1 to the original pieces of data in array to account for missing time

target = (goal * numberOfRecordedTimes) - recordedTimesTotal; //calculated time Tyler needed to reach for his last run in order to meet his goal

console.log("In order for Tyler to have hit his goal of" + " " + goal + "mph, he would have had to run" + " " + target + "mph in his final race."); //concatenate results into a sentence explaining the outcome needed for Tyler to reach his goal

alert("In order for Tyler to have hit his goal of" + " " + goal + "mph, he would have had to run" + " " + target + "mph in his final race."); //showing the user the results of the problem we solved for

alert("If Tyler had sat out his last 2 races because of his injury, what would his average have been?"); //asking user part 2 of the question

sitOutOne = recordedTimes[0] + recordedTimes[1] + recordedTimes[2] + recordedTimes[3] + recordedTimes[4] + recordedTimes[5]; //calling all but the last value in the array and getting the total

numberOfRecordedTimes = recordedTimes.length; //found number of pieces of data in the array

numberOfRecordedTimes --; //subtracting 1 from the length of the array to exclude the last time in the array

average = sitOutOne / numberOfRecordedTimes; //calculating the average if Tyler had sat out the last 2 races

console.log("If Tyler had sat out his last 2 races due to his injury, his average run time would have been" + average + "mph."); //printing to console the results by concatenating string and variable

alert("If Tyler had sat out his last 2 races due to his injury, his average run time would have been " + average + "mph."); //showing the user the result to the question
