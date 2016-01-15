// My JS will be in here -- blah

'use strict';

var hourCoffee = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];

function CampCoffee(place, minCus, maxCus, cupsPerCus, poundsPerCus) {
  this.place = place;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.cupsPerCus = cupsPerCus;
  this.poundsPerCus = poundsPerCus;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.hourlyBeans = [];
};

CampCoffee.prototype.hourlyCus = function() {
  for (var i = 0; i < hourCoffee.length; i++) {
    this.hourlyCust.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
  }
};

CampCoffee.prototype.generatePounds = function() {
  for (var i = 0; i < hourCoffee.length; i++) {
    this.hourlyBeans.push(this.hourlyCust[i] * this.poundsPerCus);
  }
};

CampCoffee.prototype.generateCups = function() {
  for (var i = 0; i < hourCoffee.length; i++) {
    this.hourlyCups.push((this.hourlyCust[i] * this.cupsPerCus) / 20);
  }
};

tableHead();
function tableHead() {
  var sectEl = document.getElementById('time');
  var tblEl = document.createElement('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
    thEl.textContent = 'Time of Day';
    trEl.appendChild(thEl);
    tblEl.appendChild(trEl);
    sectEl.appendChild(tblEl);

  for (var i = 0; i < hourCoffee.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hourCoffee[i];
    trEl.appendChild(tdEl);
  }
}

CampCoffee.prototype.render = function() {
  var sectEl = document.getElementById('time');
  var tblEl = document.createElement('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    tblEl.appendChild(trEl);
    sectEl.appendChild(tblEl);

  // for (var i = 0; i < hourCoffee.length; i++) {
  //   var tdEl = document.createElement('td');
  //   tdEl.textContent = hourCoffee[i];
  //   trEl.appendChild(tdEl);
  // }

    var trEl2 = document.createElement('tr');
    var thEl2 = document.createElement('th');
    thEl2.textContent = this.place;
    trEl2.appendChild(thEl2);
    tblEl.appendChild(trEl2);

    this.hourlyCus();
    this.generateCups();
    this.generatePounds();

  for (var i = 0; i < hourCoffee.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyBeans[i].toFixed(1);
    trEl2.appendChild(tdEl);
  }
};

var ppm = new CampCoffee('Pike Place Market', 14, 55, 1.2, 3.7);
  ppm.render();

var capHill = new CampCoffee('Capitol Hill', 32, 48, 3.2, 0.4);
  capHill.render();

var SeaLibrary = new CampCoffee('Seattle Public Library', 49, 75, 2.6, 0.2);
  SeaLibrary.render();

var southLake = new CampCoffee('South Lake Union', 35, 88, 1.3, 3.7);
  southLake.render();

var seaTac = new CampCoffee('SeaTac Airport', 68, 124, 1.1, 2.7);
  seaTac.render();

var web = new CampCoffee('Website Sales', 3, 6, 0, 6.7);
  web.render();


//Event listener

var Store = function(newStoreLocation, text) {
  this.newStoreLocation = newStoreLocation;
  this.text = text;
};

Store.prototype.renderStore = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = this.newStoreLocation + ': ' + this.text;
  return liEl;
}

var list = document.getElementById('list');
var dataForm = document.getElementById('dataForm');
var clearInput = document.getElementById('clearInput')
var listData = [];

var renderAllInput = function() {
  list.innerHTML = '';
  listData.forEach(function(lists) {
    list.appendChild(lists.renderStore());
  });
};

function handleCommentSubmit(event) {
  console.log(event);
  event.preventDefault();

  if (!event.target.beanData.value || !event.target.store.value) {
    return alert('Fields cannot be empty!');
  }
  var person = event.target.store.value;
  var remark = event.target.beanData.value;

  if (person === 'Marshall') {
    remark = 'i really hope this works!';
  }

  var newStore = new Store(person, remark);

  console.log('Input made by ' + event.target.store.value + ' at ' + Date());
  event.target.store.value = null;
  event.target.beanData.value = null;

  listData.push(newStore);
  renderAllInput();

};

dataForm.addEventListener('submit', handleCommentSubmit);

clearInput.addEventListener('click', function() {
  console.log('You just cleared the comments!');
  list.innerHTML = '';
  listData = [];
});
