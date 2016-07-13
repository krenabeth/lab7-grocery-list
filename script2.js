// make price a global variable 
var price;
// User adds items to the list - input variables addItem and addPrice
function addOn() {
  var addItem = document.getElementById("addItem").value;
  var addPrice = document.getElementById("addPrice").value;

// send to html

var el = document.createElement('li');
el.textContent = addItem;
document.getElementById("list").appendChild(el);

var el2 = document.createElement('li');
el2.textContent = addPrice;
document.getElementById("price").appendChild(el2);

price += addPrice;
// var sum = document.createElement('p');
// sum.textContent = price;
// document.getElementById("total").appendChild(sum);
}
