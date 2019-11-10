'us strict';

var seattle = document.getElementById('seattle');

var liEl = document.createElement('li');

liEl.textContent = 'proof of life';

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
      liEl.textContent = `${hours[i]} customers ${this.cookiesEachHour[i]}`;
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
      console.log('These are the darn cookies', hourlyCookies);
      this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesEachHour[i];
      console.log(typeof(this.totalCookiesForTheDay));
      console.log(this.totalCookiesForTheDay);
    
    }
  }
};
seattleShop.generateCustomersEachHour();
console.log(typeof(seattleShop.totalCookiesForTheDay));
seattleShop.render();


