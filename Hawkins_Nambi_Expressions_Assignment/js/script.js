//Nambi Hawkins
//August 13, 2015
//Expressions Assignment

var recordedTimes = [12, 11, 12, 11, 13, 14, 9]; //Entered in the Tyler's weekly times
var goal = 12; //set goal speed in order to get accepted into college
var numberOfRecordedTimes = recordedTimes.length; //found number of pieces of data in the array

recordedTimesTotal = recordedTimes[0] + recordedTimes[1] + recordedTimes[2] + recordedTimes[3] + recordedTimes[4] + recordedTimes[5] + recordedTimes[6]; //totalled up the times in the array

numberOfRecordedTimes ++; //added 1 to the original pieces of data in array to account for missing time

target = goal * numberOfRecordedTimes - recordedTimesTotal; //calculated time Tyler needed to reach for his last run in order to meet his goal
console.log("In order for Tyler to have hit his goal of" + " " + goal + "mph, he would have had to run" + " " + target + "mph in his final race."); //concatenate results into a sentence explaining the outcome needed for Tyler to reach his goal
