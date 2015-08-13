//Nambi Hawkins
//Wednesday, August 12, 2015
//Expressions Worksheet

//Calculating the area of a rectangle.
//var length = 6;
//var width = 7;
//areaOfRectangle = length*width;
//console.log(areaOfRectangle);

//Calculating the circumference of a circle
//var radius = 6; //set radius value
//const PI = 3.14159265; //set value for PI
//circumference = 2*PI*radius; //equation to solve for circumference of a circle
//console.log("The circumference of the circle is " + circumference + " " + "sq units"); //print circumference with units

//Dog Years
//var humanYears = 1;
//var dogYears = 7;
//age = humanYears*dogYears;
//console.log("Sparky is" + " " + humanYears + " " + "human years old which is" + " " + age + " " + "in dog years.");

//Slice of Pie Part 1
//var slicesPerPizza = 8;
//var numberOfPeople = 22;
//var numberOfPizzas = 8;
//slicesPerPerson = slicesPerPizza*numberOfPizzas/numberOfPeople;
//console.log(slicesPerPerson);

//Slices of Pie Part 2
//var slicesPerPizza = 8;
//var numberOfPeople = 22;
//var numberOfPizzas = 8;
//slicesForSparky = (slicesPerPizza*numberOfPizzas) % numberOfPeople;
//console.log("Sparky gets " + slicesForSparky + " slices of pizza");

//Average Shopping Bill
//var pricesWeekly = [260,80,559,106,325];
//var total = pricesWeekly[0] + pricesWeekly[1] + pricesWeekly[2] + pricesWeekly[3] + pricesWeekly[4];
//average = total/pricesWeekly.length;
//console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week");

//Discounts
var itemPrice = 750;
var discountPercentage = 20;
var itemDescription = "iPhone 6 Plus";
var salesTax = .06;
discountedPrice = itemPrice - itemPrice/discountPercentage;
discountedPriceTax = discountedPrice + discountedPrice*salesTax;
console.log("Your " + itemDescription + " was originally $" + itemPrice + ", but after a " + discountPercentage + "% discount, it is now $" + discountedPrice + " without tax, and $" +discountedPriceTax + " with tax.");

