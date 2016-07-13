// make price a global variable 
var price;
//create objects for each item on the list
function Item (name, price) {
  this.name = name;
  this.price = price;
}

var veg = new Item('broccoli', 2)
var fruit = new Item('raspberries', 4)
var dairy = new Item('eggs', 3)


// array with objects
var list;
list = [veg, fruit, dairy];


// add each object's name and price to html
function shopping() {
  price = 0;


list.forEach(function(groceries){
	document.getElementById("snazzy").innerHTML += "<li>" + groceries.name + "</li>";
	
  var priceNum = groceries.price;
  priceNum = parseInt(priceNum, 10);

  document.getElementById("evenSnazzier").innerHTML += "<li>" + priceNum.toFixed(2) + "</li>"; 
  	price += priceNum;
  });

// subtotal and tax
  document.getElementById("subtotal").innerHTML =          
  "<p>" + "subtotal = " + price.toFixed(2) + "</p>";
  var tax = 0.06 * price;

  document.getElementById("tax").innerHTML =          
  "<p>" + "tax = " + tax.toFixed(2) + "</p>";
  var total = price + tax;

// add row for total price
  document.getElementById("total").innerHTML =          
  "<h2>" + "Total = " + total + "</h2>";
}
shopping();


// User adds items to the list - input variables addItem and addPrice
// throw in a nextSibling
function addOn() {

    var myList = document.getElementById('snazzy');
    var newContent = document.createElement('li');
    newContent.innerHTML = document.getElementById('addItem').value;

    var myList2 = document.getElementById('evenSnazzier');
    var newContent2 = document.createElement('li');

    var newPrice = document.getElementById('addPrice').value;
    newPrice = parseInt(newPrice, 10);
    newContent2.innerHTML = newPrice;


// subtotal and tax - again!

    newSubtotal = price + newPrice;       
    document.getElementById('subtotal').innerHTML = "<p>" + "subtotal " + newSubtotal + "</p>";

    var tax = 0.06 * newSubtotal;

    document.getElementById("tax").innerHTML =          
    "<p>" + "tax " + tax + "</p>";

 
    newTotal = newSubtotal + tax;
    document.getElementById('total').innerHTML =         
    "<h2>" + "Total = " + newTotal + "</h2>";


    while (newContent.firstChild) {
        myList.appendChild(newContent.firstChild) && myList2.appendChild(newContent2.firstChild);
    }

}

