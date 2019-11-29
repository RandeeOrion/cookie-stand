'use strict';

var tableLocation = document.getElementById('storeSales');
var allStores = [];
console.log(allStores);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function CreateStore(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  this.calCustomersEachHour();
  this.calcCookiesSoldEachHour();
  allStores.push(this);
  //this.createFooterRow();
  this.generateTableBody();
}



function randomNumber(min, max) {
  return Math.round(Math.floor(Math.random() * (max - min)) + min);
}


CreateStore.prototype.calCustomersEachHour = function () {
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
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Name';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total Daily Cookies';
  trEl.appendChild(thEl);
  tableLocation.appendChild(trEl);
}
generateTableHeader();

CreateStore.prototype.generateTableBody = function () {
  var trEl = document.createElement('tr');
  tableLocation.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];

    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
};
//create footer row
CreateStore.prototype.createFooterRow = function () {  
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);
  console.log('hourly totals; ', tdEl);

  for (var i = 0; i < hours.length; i++) {
    var storeHourlyTotals = 0;
    tdEl = document.createElement('td');

    for (var j = 0; j < allStores.length; j++){
      storeHourlyTotals += allStores[j].cookiesSoldEachHour[i];}
    console.log('hello');
    //tdEl text content storesHourlyTotals
    tdEl.textContent = storeHourlyTotals;
    trEl.appendChild(tdEl);
  
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
  tableLocation.appendChild(trEl);
};


new CreateStore('Seattle', 23, 65, 6.3);
new CreateStore('Tokyo', 3, 24, 1.2);
new CreateStore('Dubai', 11, 38, 3.7);
new CreateStore('Lima', 2, 16, 4.6);
new CreateStore('Paris', 20, 38, 2.3);


CreateStore.prototype.createFooterRow();



var formLocation = document.getElementById('userForm');
formLocation.addEventListener('submit', handleSubmit);

//take in the form submissions
//
function handleSubmit(event) {
  event.preventDefault();
  var newName = event.target.newStoreName.value;
  var newMinCust = parseInt(event.target.formMinCustomers.value, 10);
  var newMaxCust = parseInt(event.target.formMaxCustomers.value, 10);
  var newAvgCookie = parseInt(event.target.formAvgCookie.value, 10);
  //console.log ('type of newAvgCookie', typeof newAvgCookie);
  new CreateStore(newName, newMinCust, newMaxCust, newAvgCookie);
  //console.log (new CreateStore);

  formLocation.reset();
}
//use form Submissions  as arguments for this.generateTableBody


// create if else to create alerts if boxes are empty or not filled properly can also create an iff statment to input a positive number  minCust < 0 || maxCust < 0 || avgCust < 0 




