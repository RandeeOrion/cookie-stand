'use strict';

var tableLocation = document.getElementById('storeSales');
var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function CreateStore(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  // console.log(name);
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  this.calCustomersEachHour();
  this.calcCookiesSoldEachHour();
  allStores.push(this);

  this.generateTableBody();
}

//this needs work.


function randomNumber(min, max) {
  return Math.round(Math.floor(Math.random() * (max - min)) + min);
}

function addElement (childElType, childContent, parentEl) {
  var childElement = document.createElement(childElement);
  var childContent = 
  //Need the rest o this from front row
}

CreateStore.prototype.calCustomersEachHour = function () {
  //generate a random number
  //store it in its array
  //create a random number for each hour
  //push the random number into the customersEachHour
  for (var i = 0; i < hours.length; i++) {
    var randomCustomerForOneHour = randomNumber(this.minCustomer, this.maxCustomer);
    this.customersEachHour.push(randomCustomerForOneHour);
  }
};

CreateStore.prototype.calcCookiesSoldEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesForOneHour = this.avgCookie * this.customersEachHour[i];
    cookiesForOneHour = Math.round(cookiesForOneHour);
    this.cookiesSoldEachHour.push(cookiesForOneHour);

    this.totalCookiesForTheDay += cookiesForOneHour;

  }
};


function generateTableHeader() {
  //make a tr
  var trEl = document.createElement('tr');
  //make a td filled with Name and append to tr
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Store Name';
  trEl.appendChild(tdEl);
  //make a loop to create th for each hour and append to tr
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //make a td to hold the word totals and append to tr
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total Daily Cookies';
  trEl.appendChild(tdEl);
  tableLocation.appendChild(trEl);
}

generateTableHeader();

CreateStore.prototype.generateTableBody = function () {
  //create tr append to table
  var trEl = document.createElement('tr');
  tableLocation.appendChild(trEl);
  //create a td fill with this.name and append to tr
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  //create a for loop over this.cookiesSoldEachHour create a td and fill with cookiesSoldEachHour[i] then append to tr
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  }
  //create a td fill with this.totalCookiesForTheDay and append to tr
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
  
}

new CreateStore('Seattle', 23, 65, 6.3);
new CreateStore('Tokyo', 3, 24, 1.2);
new CreateStore('Dubai', 11, 38, 3.7);
new CreateStore('Lima', 2, 16, 4.6);


// for (var i = 0; i < allStores.length; i++) {
//   allStores[i].generateTableBody();
// }

//bookmark the DOM at userForm and addEventListener 



var formLocation = document.getElementById('userForm');
formLocation.addEventListener("submit", handleSubmit);

//take in the form submissions
//
function handleSubmit(event) {
  event.preventDefault();
  var newName = event.target.newStoreName.value;
  var newMinCust = parseInt(event.target.formMinCustomers.value, 10);
  var newMaxCust = parseInt(event.target.formMaxCustomers.value, 10);
  var newAvgCookie = parseInt(event.target.formAvgCookie.value, 10);
  console.log ('type of newAvgCookie', typeof newAvgCookie);
  new CreateStore(newName, newMinCust, newMaxCust, newAvgCookie);
  console.log (new CreateStore);

  formLocation.reset();
}
//use form Submissions  as arguments for this.generateTableBody


// create if else to create alerts if boxes are empty or not filled properly can also create an iff statment to input a positive number  minCust < 0 || maxCust < 0 || avgCust < 0 




