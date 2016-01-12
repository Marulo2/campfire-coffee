// My JS will be in here

var kiosk = {
  place: 'Pike Place Market',
  minCus: 14,
  maxCus: 55,
  cupsPerCus: 1.2,
  poundsPerCus: 3.7,

  generateCus: function() {
    return Math.floor(Math.random() * (kiosk.maxCus - kiosk.minCus + 1)) + kiosk.minCus;
  },

  generatePounds: function() {
    return kiosk.generateCus() * kiosk.poundsPerCus;
  },

  generateCups: function() {
    return kiosk.generateCus() * kiosk.cupsPerCus;
  }
};

var headEl = document.createElement('h2');
headEl.textContent = 'Pike Place Market data';
document.body.appendChild(headEl);

var hourCoffee = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

for (i = 0; i < hourCoffee.length; i++) {
  var paragraphEl = document.createElement('ul');
  paragraphEl.textContent = hourCoffee[i] + 'We will need ' + kiosk.generatePounds() + ' pounds.' + ' We\'ll have ' + kiosk.generateCus() + ' customers and will need ' + kiosk.generateCups() + ' cups.';
  document.body.appendChild(paragraphEl);
}


// var paragraphEl2 = document.createElement('ul');
// paragraphEl2.textContent = 'Todays estimated coffee needs for Pike Place at 7am are: ' + kiosk.generate(14, 55) + ' pounds.'
// document.body.appendChild(paragraphEl2);
//
// var paragraphEl3 = document.createElement('ul');
// paragraphEl3.textContent = 'Todays estimated coffee needs for Pike Place at 8am are: ' + kiosk.generate(14, 55) + ' pounds.'
// document.body.appendChild(paragraphEl3);
//
// var paragraphEl4 = document.createElement('ul');
// paragraphEl4.textContent = 'Todays estimated coffee needs for Pike Place at 9am are: ' + kiosk.generate(14, 55) + ' pounds.'
// document.body.appendChild(paragraphEl4);
//
// var paragraphEl5 = document.createElement('ul');
// paragraphEl5.textContent = 'Todays estimated coffee needs for Pike Place at 6am are: ' + kiosk.generate(14, 55) + ' pounds.'
// document.body.appendChild(paragraphEl5);
//
// var paragraphEl6 = document.createElement('ul');
// paragraphEl6.textContent = 'Todays estimated coffee needs for Pike Place at 6am are: ' + kiosk.generate(14, 55) + ' pounds.'
// document.body.appendChild(paragraphEl6);
//
// var paragraphEl7 = document.createElement('ul');
// paragraphEl7.textContent = 'Todays estimated coffee needs for Pike Place at 6am are: ' + kiosk.generate(14, 55) + ' pounds.'
// document.body.appendChild(paragraphEl7);



var kiosk2 = {
  place: 'Cap Hill',
  minCus: 32,
  maxCus: 48,
  cupsPerCus: 3.2,
  poundsPerCus: 0.4,

  generate: function() {
    return Math.random() * ((48 - 32) + 32) * 0.4;
  }
};

var headEl2 = document.createElement('h2');
headEl2.textContent = 'Cap Hill data';
document.body.appendChild(headEl2);

var paragraphEl = document.createElement('ul');
paragraphEl.textContent = 'Todays estimated coffee needs for Cap Hill are: ' + kiosk2.generate(32, 48) + ' pounds.'
document.body.appendChild(paragraphEl);

var kiosk3 = {
  place: 'Seattle Public Library',
  minCus: 49,
  maxCus: 75,
  cupsPerCus: 2.6,
  poundsPerCus: 0.2,

  generate: function() {
    return Math.random() * ((75 - 49) + 49) * 0.2;
  }
};

var headEl3 = document.createElement('h2');
headEl3.textContent = 'Seattle Public Library data';
document.body.appendChild(headEl3);

var paragraphEl = document.createElement('ul');
paragraphEl.textContent = 'Todays estimated coffee needs for Seattle Public Library are: ' + kiosk3.generate(49, 75) + ' pounds.'
document.body.appendChild(paragraphEl);

var kiosk4 = {
  place: 'South Lake Union',
  minCus: 35,
  maxCus: 88,
  cupsPerCus: 1.3,
  poundsPerCus: 3.7,

  generate: function() {
    return Math.random() * ((88 - 35) + 35) * 3.7;
  }
};

var headEl4 = document.createElement('h2');
headEl4.textContent = 'South Lake Union data';
document.body.appendChild(headEl4);

var paragraphEl = document.createElement('ul');
paragraphEl.textContent = 'Todays estimated coffee needs for South Lake Union are: ' + kiosk4.generate(35, 88) + ' pounds.'
document.body.appendChild(paragraphEl);

var kiosk5 = {
  place: 'SeaTac',
  minCus: 68,
  maxCus: 124,
  cupsPerCus: 1.1,
  poundsPerCus: 2.7,

  generate: function() {
    return Math.random() * ((124 - 68) + 68) * 2.7;
  }
};

var headEl5 = document.createElement('h2');
headEl5.textContent = 'SeaTac data';
document.body.appendChild(headEl5);

var paragraphEl = document.createElement('ul');
paragraphEl.textContent = 'Todays estimated coffee needs for SeaTac are: ' + kiosk5.generate(68, 124) + ' pounds.'
document.body.appendChild(paragraphEl);

var kiosk6 = {
  place: 'Web Sales',
  minCus: 3,
  maxCus: 6,
  cupsPerCus: 0,
  poundsPerCus: 6.7,

  generate: function() {
    return Math.random() * ((6 - 3) + 3) * 6.7;
  }
};

var headEl6 = document.createElement('h2');
headEl6.textContent = 'Web Sales data';
document.body.appendChild(headEl6);

var paragraphEl = document.createElement('ul');
paragraphEl.textContent = 'Todays estimated coffee needs for Web Sales are: ' + kiosk6.generate(3, 6) + ' pounds.'
document.body.appendChild(paragraphEl);


// var duck = {
//   material: 'rubber',
//   color: 'yellow',
//   squeaks: false,
//   favoriteFoods: ['duckweed', 'peanut butter', 'children'],
//
//   says: function() {
//     console.log('QUACK');
//   }
// };
//
// var paragraphEl = document.createElement('p')
// paragraphEl.textContent = duck.favoriteFoods
// document.body.appendChild(ParagraphEl)
