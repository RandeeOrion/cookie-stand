'us strict';

var seattle = document.getElementById('storeSales');

var liEl = document.createElement('li');

console.log(liEl);


seattle.appendChild(liEl);

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var seattleShop = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} Cookies this hour ${this.cookiesEachHour[i]}`;
      seattle.appendChild(liEl);
    }
    return(liEl);
  },

  randomNumber: function(min,max) {
    return Math.round(Math.floor(Math.random() * (max - min)) + min);
  },

  generateCustomersEachHour: function() {
    //generate a random number
    //store it in its array
    //create a random number for each hour
    //push the random number into the customersEachHour
    for (var i = 0; i < hours.length; i++) {
      var customerPush = this.randomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customerPush);
      var hourlyCookies = this.avgCookie * this.customersEachHour[i];
      hourlyCookies = Math.round(hourlyCookies);

      this.cookiesEachHour.push(hourlyCookies);
      //console.log('These are the darn cookies', hourlyCookies);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesEachHour[i];
      //console.log(typeof(this.totalCookiesForTheDay));
      //console.log(this.totalCookiesForTheDay);
      
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Seattle Store';
    seattle.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `Total Cookies per Day is : ${this.totalCookiesForTheDay}`;
    seattle.appendChild(liEl);
  }
};




seattleShop.generateCustomersEachHour();
console.log(typeof(seattleShop.totalCookiesForTheDay));
seattleShop.render();


var tokyo = document.getElementById('storeSales');

var liEl = document.createElement('li');

console.log(liEl);


tokyo.appendChild(liEl);

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var tokyoShop = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} Cookies this hour ${this.cookiesEachHour[i]}`;
      tokyo.appendChild(liEl);
    }
    return(liEl);
  },

  randomNumber: function(min,max) {
    return Math.round(Math.floor(Math.random() * (max - min)) + min);
  },

  generateCustomersEachHour: function() {
    //generate a random number
    //store it in its array
    //create a random number for each hour
    //push the random number into the customersEachHour
    for (var i = 0; i < hours.length; i++) {
      var customerPush = this.randomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customerPush);
      var hourlyCookies = this.avgCookie * this.customersEachHour[i];
      hourlyCookies = Math.round(hourlyCookies);

      this.cookiesEachHour.push(hourlyCookies);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesEachHour[i];
      
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Toyko Store';
    tokyo.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `Total Cookies per Day is : ${this.totalCookiesForTheDay}`;
    tokyo.appendChild(liEl);
  }
};




tokyoShop.generateCustomersEachHour();
tokyoShop.render();






var dubai = document.getElementById('storeSales');
var liEl = document.createElement('li');


dubai.appendChild(liEl);

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var dubaiShop = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} Cookies this hour ${this.cookiesEachHour[i]}`;
      dubai.appendChild(liEl);
    }
    return(liEl);
  },

  randomNumber: function(min,max) {
    return Math.round(Math.floor(Math.random() * (max - min)) + min);
  },

  generateCustomersEachHour: function() {
    //generate a random number
    //store it in its array
    //create a random number for each hour
    //push the random number into the customersEachHour
    for (var i = 0; i < hours.length; i++) {
      var customerPush = this.randomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customerPush);
      var hourlyCookies = this.avgCookie * this.customersEachHour[i];
      hourlyCookies = Math.round(hourlyCookies);

      this.cookiesEachHour.push(hourlyCookies);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesEachHour[i];
      
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Dubai Store';
    dubai.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `Total Cookies per Day is : ${this.totalCookiesForTheDay}`;
    dubai.appendChild(liEl);
  }
};

dubaiShop.generateCustomersEachHour();
dubaiShop.render();





var paris = document.getElementById('storeSales');
var liEl = document.createElement('li');


paris.appendChild(liEl);

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var parisShop = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} Cookies this hour ${this.cookiesEachHour[i]}`;
      paris.appendChild(liEl);
    }
    return(liEl);
  },

  randomNumber: function(min,max) {
    return Math.round(Math.floor(Math.random() * (max - min)) + min);
  },

  generateCustomersEachHour: function() {
    //generate a random number
    //store it in its array
    //create a random number for each hour
    //push the random number into the customersEachHour
    for (var i = 0; i < hours.length; i++) {
      var customerPush = this.randomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customerPush);
      var hourlyCookies = this.avgCookie * this.customersEachHour[i];
      hourlyCookies = Math.round(hourlyCookies);

      this.cookiesEachHour.push(hourlyCookies);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesEachHour[i];
      
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Paris Store';
    dubai.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `Total Cookies per Day is : ${this.totalCookiesForTheDay}`;
    paris.appendChild(liEl);
  }
};




parisShop.generateCustomersEachHour();
parisShop.render();





var lima = document.getElementById('storeSales');
var liEl = document.createElement('li');


lima.appendChild(liEl);

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var limaShop = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} Cookies this hour ${this.cookiesEachHour[i]}`;
      lima.appendChild(liEl);
    }
    return(liEl);
  },

  randomNumber: function(min,max) {
    return Math.round(Math.floor(Math.random() * (max - min)) + min);
  },

  generateCustomersEachHour: function() {
    //generate a random number
    //store it in its array
    //create a random number for each hour
    //push the random number into the customersEachHour
    for (var i = 0; i < hours.length; i++) {
      var customerPush = this.randomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customerPush);
      var hourlyCookies = this.avgCookie * this.customersEachHour[i];
      hourlyCookies = Math.round(hourlyCookies);

      this.cookiesEachHour.push(hourlyCookies);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesEachHour[i];
      
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Lima Store';
    lima.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `Total Cookies per Day is : ${this.totalCookiesForTheDay}`;
    lima.appendChild(liEl);
  }
};

limaShop.generateCustomersEachHour();
limaShop.render();




