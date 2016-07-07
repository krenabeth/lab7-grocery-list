var veg = {
  name: 'broccoli',
  price: 2.00
};

var fruit = {
  name: 'raspberries',
  price: 4.50
};

var dairy = {
  name: 'eggs',
  price: 3.00
};

var list;
list = [veg, fruit, dairy];

list.push(crackers = {
  name: 'triskets',
  price: 2.99
});

var price = 0;
list.forEach(function(groceries){
  console.log(groceries.name + " at " + groceries.price);

  price += groceries.price;
});

console.log("total = $" + price.toFixed(2));// toFixed: 0.00

//  attempt to get answers into the html

// 		"<li></li>" +
// 		"<li></li>" +
// 	"</ul>";
// document.getElementById("evenSnazzier").innerHTML =
// 	"<ul id='bucks'>" +
// 		"<li></li>" +
// 		"<li></li>" +
// 		"<li></li>" +
// 	"</ul>";


// var veg = {
//   name: 'broccoli',
//   price: 2.00
// };

// var fruit = {
//   name: 'raspberries',
//   price: 4.50
// };

// var dairy = {
//   name: 'eggs',
//   price: 3.00
// };

// var list;
// list = [veg, fruit, dairy];

// var price = 0;
// list.forEach(function(groceries){
// 	document.getElementById("snazzy").innerHTML =
// 	"<ul class='eats'>" + "<li>" + groceries.name + "</li>";
// 	document.getElementById("evenSnazzier").innerHTML =
// 	"<ul class='bucks'>" + "<li>" + groceries.price + "</li>"; // what's going on with price?
//   	price += groceries.price;
// });
// document.getElementById("snazzy").innerHTML =
//  "<h4>Total = </h4>";  

// document.getElementById("evenSnazzier").innerHTML =          
// "<h4>" + price + "</h4>";


