//Nambi Hawkins
//August 20, 2015
//Conditonals Assignment

alert("You work for a chute manufacturing company as an estimator. You need to know which company to use for freight. " +
    "If a chute height is 55' or less, you can use YRC, and it doesn't matter how many chutes you are shipping as " +
    "long as they are all 55' or less. If a chute is greater than 55', you need to use C.H. Robinson.");
//stating the problem

var name = prompt("Thank you for visiting Freight Helper. My name is Rachel, yours is?");
//Make the experience personal by asking for the name and using it.

var chuteType = prompt("Welcome, " + name + " will you be shipping a trash or linen chute with us today?");


//Asking user what type of chute they are shipping.

if (chuteType == "trash"){
    pallets = 2;
} else {
    pallets = 3;
}
//A trash chute gets 2 pallets, a linen chute gets 3

var chutesToShip = prompt("How many chutes will you be shipping? \nSometimes if the number of chutes is greater than 1 " +
    "and the truck space you require is 12 feet, we will need to send your information to our quoters to determine the best" +
    "price for you");

//Asking  user how many chutes will be shipping. This will determine the time it takes for them to get their quote.

var feetTotal = prompt("What is the total height of the chute?");
//Asking user for the chute height

if(Number(feetTotal) > 55) {
    console.log("Looks like we can help you with your delivery!");
    alert("Looks like we can help you with your delivery!");
} else {
    console.log(name + ", for a chute this height we would like recommend YRC. \nIf you would like to continue" +
        "with C.H. Robinson, please press OK. \nOtherwise, go to http://my.yrc.com");
    alert(name + ", for a chute this height we would like recommend YRC. \nIf you would like to continue" +
        "with C.H. Robinson, please press OK. \nOtherwise, go to http://my.yrc.com");
}
//If the chute height is greater than 55 then we can continue. If not, we recommend that YRC is used.