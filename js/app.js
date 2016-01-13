// My JS will be in here

'use strict';

var places = ['Pike Place Market', 'Capitol Hill', 'Seattle Public Library', 'South Lake Union', 'SeaTac Airport', 'Website'];

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
    this.hourlyCups.push(this.hourlyCust[i] * this.cupsPerCus);
  }
};

CampCoffee.prototype.render = function() {
  var sectEl = document.getElementById('time');
  var tblEl = document.createElement('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
    thEl.textContent = 'Time of Day';
    trEl.appendChild(thEl);

  for (var i = 0; i < hourCoffee.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hourCoffee[i];
    trEl.appendChild(tdEl);
  }
  tblEl.appendChild(trEl);
  sectEl.appendChild(tblEl);

  var trEl2 = document.createElement('tr');
  var thEl2 = document.createElement('th');
  for (var i = 0; i < places.length; i++) {
    thEl2.textContent = places[i];
    trEl2.appendChild(thEl2);
  }

    this.hourlyCus();
    this.generateCups();
    this.generatePounds();

  for (var i = 0; i < hourCoffee.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyBeans[i];
    trEl2.appendChild(tdEl);
  }
  tblEl.appendChild(trEl2);
  sectEl.appendChild(tblEl);
};



// CampCoffee.prototype.coffeeRender = function() {
//
//   this.hourlyCus();
//   this.generateCups();
//   this.generatePounds();
//
//   for (var i = 0; i < places.length; i++) {
//     var headEl = document.createElement('h2');
//     headEl.textContent = places[i];
//     document.body.appendChild(headEl);
//
//
//     for (var i = 0; i < hourCoffee.length; i++) {
//       var paragraphEl = document.createElement('ul');
//       paragraphEl.textContent = hourCoffee[i] + 'We\'ll have ' + this.hourlyCust[i] + ' customers and will need ' + this.hourlyCups[i] + ' cups and ' + 'we will need ' + this.hourlyBeans[i] + ' pounds of coffee beans.';
//       document.body.appendChild(paragraphEl);
//     }
//   }
// };


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
//
//   function table() {
//     var sectEl = document.createElement('test');
//     var tblEl = document.createElement('table')
//     var trEl = document.createElement('tr');
//     var thEl = document.createElement('th')
//     thEl.textContent = 'Time of Day'
//     trEl.appendChild(headerEl);
//
//     for (var i = 0; i < hourCoffee.length; i++) {
//       var tdEl = document.createElement('td');
//       tdEl.textContent = hourCoffee[i];
//       trEl.body.appendChild(tdEl);
//     }
//     tblEl.body.appendChild(trEl);
//     sectEl.body.appendChild(tblEl);
//   };
//
//   table();

//
// var kiosk = {
//   place: 'Pike Place Market',
//   minCus: 14,
//   maxCus: 55,
//   cupsPerCus: 1.2,
//   poundsPerCus: 3.7,
//   hourlyCust: [],
//   hourlyCups: [],
//   hourlyBeans: [],
//
//   hourlyCus: function() {
//     for (var i = 0; i < hourCoffee.length; i++) {
//       this.hourlyCust.push(Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus));
//     }
//   },
//
//   generatePounds: function() {
//     for (var i = 0; i < hourCoffee.length; i++) {
//       this.hourlyBeans.push(this.hourlyCust[i] * this.poundsPerCus);
//     }
//   },
//
//   generateCups: function() {
//     for (var i = 0; i < hourCoffee.length; i++) {
//       this.hourlyCups.push(this.hourlyCust[i] * this.cupsPerCus);
//     }
//   },
//
//   coffeeRender: function() {
//     var headEl = document.createElement('h2');
//     headEl.textContent = 'Pike Place Market data';
//     document.body.appendChild(headEl);
//
//     this.hourlyCus();
//     this.generateCups();
//     this.generatePounds();
//
//     for (var i = 0; i < hourCoffee.length; i++) {
//       var paragraphEl = document.createElement('ul');
//       paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk.hourlyBeans[i] + ' pounds.' + ' We\'ll have ' + kiosk.hourlyCust[i] + ' customers and will need ' + kiosk.hourlyCups[i] + ' cups.';
//       document.body.appendChild(paragraphEl);
//     }
//   }
// };
//
// kiosk.coffeeRender();

// Can you give the array a className inside the loop?
//
// var kiosk2 = {
//   place: 'Cap Hill',
//   minCus: 32,
//   maxCus: 48,
//   cupsPerCus: 3.2,
//   poundsPerCus: 0.4,
//
//     generateCus: function() {
//       return Math.floor(Math.random() * (kiosk2.maxCus - kiosk2.minCus + 1)) + kiosk2.minCus;
//     },
//
//     generatePounds: function() {
//       return kiosk2.generateCus() * kiosk2.poundsPerCus;
//     },
//
//     generateCups: function() {
//       return kiosk2.generateCus() * kiosk2.cupsPerCus;
//     }
//   };
//
// var headEl2 = document.createElement('h2');
// headEl2.textContent = 'Cap Hill data';
// document.body.appendChild(headEl2);
//
// for (var i = 0; i < hourCoffee.length; i++) {
//   var paragraphEl = document.createElement('ul');
//   paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk2.generatePounds() + ' pounds.' + ' We\'ll have ' + kiosk2.generateCus() + ' customers and will need ' + kiosk2.generateCups() + ' cups.';
//   document.body.appendChild(paragraphEl);
// }
//
// var kiosk3 = {
//   place: 'Seattle Public Library',
//   minCus: 49,
//   maxCus: 75,
//   cupsPerCus: 2.6,
//   poundsPerCus: 0.2,
//
//     generateCus: function() {
//       return Math.floor(Math.random() * (kiosk3.maxCus - kiosk3.minCus + 1)) + kiosk3.minCus;
//     },
//
//     generatePounds: function() {
//       return kiosk3.generateCus() * kiosk3.poundsPerCus;
//     },
//
//     generateCups: function() {
//       return kiosk3.generateCus() * kiosk3.cupsPerCus;
//     }
//   };
//
// var headEl3 = document.createElement('h2');
// headEl3.textContent = 'Seattle Public Library data';
// document.body.appendChild(headEl3);
//
// for (var i = 0; i < hourCoffee.length; i++) {
//   var paragraphEl = document.createElement('ul');
//   paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk3.generatePounds() + ' pounds.' + ' We\'ll have ' + kiosk3.generateCus() + ' customers and will need ' + kiosk3.generateCups() + ' cups.';
//   document.body.appendChild(paragraphEl);
// }
//
// var kiosk4 = {
//   place: 'South Lake Union',
//   minCus: 35,
//   maxCus: 88,
//   cupsPerCus: 1.3,
//   poundsPerCus: 3.7,
//
//     generateCus: function() {
//       return Math.floor(Math.random() * (kiosk4.maxCus - kiosk4.minCus + 1)) + kiosk4.minCus;
//     },
//
//     generatePounds: function() {
//       return kiosk4.generateCus() * kiosk4.poundsPerCus;
//     },
//
//     generateCups: function() {
//       return kiosk4.generateCus() * kiosk4.cupsPerCus;
//     }
//   };
//
// var headEl4 = document.createElement('h2');
// headEl4.textContent = 'South Lake Union data';
// document.body.appendChild(headEl4);
//
// for (var i = 0; i < hourCoffee.length; i++) {
//   var paragraphEl = document.createElement('ul');
//   paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk4.generatePounds() + ' pounds.' + ' We\'ll have ' + kiosk4.generateCus() + ' customers and will need ' + kiosk4.generateCups() + ' cups.';
//   document.body.appendChild(paragraphEl);
// }
//
// var kiosk5 = {
//   place: 'SeaTac',
//   minCus: 68,
//   maxCus: 124,
//   cupsPerCus: 1.1,
//   poundsPerCus: 2.7,
//
//     generateCus: function() {
//       return Math.floor(Math.random() * (kiosk5.maxCus - kiosk5.minCus + 1)) + kiosk5.minCus;
//     },
//
//     generatePounds: function() {
//       return kiosk5.generateCus() * kiosk5.poundsPerCus;
//     },
//
//     generateCups: function() {
//       return kiosk5.generateCus() * kiosk5.cupsPerCus;
//     }
//   };
//
// var headEl5 = document.createElement('h2');
// headEl5.textContent = 'SeaTac data';
// document.body.appendChild(headEl5);
//
// for (var i = 0; i < hourCoffee.length; i++) {
//   var paragraphEl = document.createElement('ul');
//   paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk5.generatePounds() + ' pounds.' + ' We\'ll have ' + kiosk5.generateCus() + ' customers and will need ' + kiosk5.generateCups() + ' cups.';
//   document.body.appendChild(paragraphEl);
// }
//
// var kiosk6 = {
//   place: 'Web Sales',
//   minCus: 3,
//   maxCus: 6,
//   cupsPerCus: 0,
//   poundsPerCus: 6.7,
//
//     generateCus: function() {
//       return Math.floor(Math.random() * (kiosk6.maxCus - kiosk6.minCus + 1)) + kiosk6.minCus;
//     },
//
//     generatePounds: function() {
//       return kiosk6.generateCus() * kiosk6.poundsPerCus;
//     },
//
//     generateCups: function() {
//       return kiosk6.generateCus() * kiosk6.cupsPerCus;
//     }
//   };
//
// var headEl6 = document.createElement('h2');
// headEl6.textContent = 'Web Sales data';
// document.body.appendChild(headEl6);
//
// for (var i = 0; i < hourCoffee.length; i++) {
//   var paragraphEl = document.createElement('ul');
//   paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk6.generatePounds() + ' pounds.' + ' We\'ll have ' + kiosk6.generateCus() + ' customers and will need ' + kiosk6.generateCups() + ' cups.';
//   document.body.appendChild(paragraphEl);
// }
