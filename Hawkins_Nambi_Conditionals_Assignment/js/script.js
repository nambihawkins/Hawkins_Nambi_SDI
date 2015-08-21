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
