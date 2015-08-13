//Nambi Hawkins
//Wednesday, August 12, 2015
//Expressions Worksheet

//Calculating the area of a rectangle.
//var length = 6;
//var width = 7;
//var areaOfRectangle = length*width;
//console.log(areaOfRectangle);

//Calculating the circumference of a circle
//var radius = 6; //set radius value
//const PI = 3.14159265; //set value for PI
//var circumference = 2*PI*radius; //equation to solve for circumference of a circle
//console.log("The circumference of the circle is " + circumference + " " + "sq units"); //print circumference with units

//Dog Years
//var humanYears = 1;
//var dogYears = 7;
//var age = humanYears*dogYears;
//console.log("Sparky is" + " " + humanYears + " " + "human years old which is" + " " + age + " " + "in dog years.");

//Slice of Pie Part 1
//var slicesPerPizza = 8;
//var numberOfPeople = 22;
//var numberOfPizzas = 8;
//var slicesPerPerson = slicesPerPizza*numberOfPizzas/numberOfPeople;
//console.log(slicesPerPerson);

//Slices of Pie Part 2
//var slicesPerPizza = 8;
//var numberOfPeople = 22;
//var numberOfPizzas = 8;
//var slicesForSparky = (slicesPerPizza*numberOfPizzas) % numberOfPeople;
//console.log("Sparky gets " + slicesForSparky + " slices of pizza");

//Average Shopping Bill
var pricesWeekly = [260,80,559,106,325];
var total = pricesWeekly[0] + pricesWeekly[1] + pricesWeekly[2] + pricesWeekly[3] + pricesWeekly[4];
var average = total/5;
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week");