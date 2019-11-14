'use strict';


var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CreateStore(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  // console.log(name);
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.hourlyCookies = [];
  this.totalCookiesForTheDay = 0;
  this.randomNumber = [];
  this.totalCustomersEachHour();
  allStores.push(this);

}

//this needs work.
CreateStore.prototype.cookiesEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
     var hourlyCookies = this.avgCookie * this.customersEachHour[i];
     hourlyCookies = Math.round(hourlyCookies);
  }
};
console.log(CreateStore.prototype.cookiesEachHour);

CreateStore.prototype.randomNumber = function (min, max) {
  return Math.round(Math.floor(Math.random() * (max - min)) + min);
};

CreateStore.prototype.totalCustomersEachHour = function () {
  //generate a random number
  //store it in its array
  //create a random number for each hour
  //push the random number into the customersEachHour
  for (var i = 0; i < hours.length; i++) {
    var customerPush = CreateStore.prototype.randomNumber(this.minCustomer, this.maxCustomer);
    this.customersEachHour.push(customerPush);
  }
};


var seattleStore = new CreateStore('Seattle', 23, 65, 6.3);
var tokyoStore = new CreateStore('Tokyo', 3, 24, 1.2);
var dubaiStore = new CreateStore('Dubai', 11, 38, 3.7);
var limaStore = new CreateStore('Lima', 2, 16,4.6);
console.log(allStores);




