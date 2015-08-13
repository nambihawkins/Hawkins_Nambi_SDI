var recordedTimes = [12, 11, 12, 11, 13, 14, 9];
var goal = 12;
var numberOfRecordedTimes = recordedTimes.length;

recordedTimesTotal = recordedTimes[0] + recordedTimes[1] + recordedTimes[2] + recordedTimes[3] + recordedTimes[4] + recordedTimes[5] + recordedTimes[6];

numberOfRecordedTimes ++;

target = goal * numberOfRecordedTimes - recordedTimesTotal;
console.log("In order for Tyler to have hit his goal of" + " " + goal + "mph, he would have had to run" + " " + target + "mph in his final race.");
