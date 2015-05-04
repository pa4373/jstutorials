// Mobile Number Magic, sadly it won't work for those who got last 4 digits starting from 0.
var d = 89123;
d = d * 80;
d = d + 1;
d = d * 250;
d = d + 4567;
d = d + 4567;
d = d - 250;
d === 891234567;
//: false
d = d / 2;
d === 891234567;
//: true

// Russian roulette program
var bullet = 3;
var player = 1;
var rotate;
var isDead = false;

while (!isDead) {
   rotate = Math.floor(Math.random() * (1 + 6 - 1)) + 1;
   if (rotate === bullet) {
      isDead = true;
      break;
   } else {
      if (player === 1) {
         player = 2;
      } else {
         player = 1;
      }
   }
}

player;

// Sum of 1 to 1000.
var sum = 0;
for (var i = 1; i <= 1000; i = i + 1) {
   sum = sum + i;
}

// Verify Collatz conjecture holds for 2 to 1000
// (if one of them doesn't fold, the program won't terminate.)
for (var i = 2; i <= 1000; i = i + 1) {
  var n = i; 
  // Here we make a copy of i to verify collatz conjecture, or your program will not terminate.
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
}

// ABS function for two number;
var abs = function (a, b) {
   var res = a - b;
   if (res < 0) {
      res = res * -1;
   }
   return res;
};

// A function which returns a new function only works between 9 AM to 5 PM.
var fn = function (f) {
   return function (n) {
      var currentDate = new Date();
      var currentHour = currentDate.getHours();
      if (currentHour < 9 || currentHour > 17) {
         return 'I\'m off work now, leave me alone!';
      } else {
         return f(n);
      }
   };
};

// Generate new square function out of fn
var square = fn(function (e) {
   return n * n;
});

square(2);

// Selection Sort
var selSort = function (arr) {
   var swap;
   for (var i = 0; i < arr.length; i = i + 1) {
      for (var j = i; j < arr.length; j = j + 1) {
         if (arr[i] > arr[j]) { // same as arr[i] - arr[j] > 0
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
         }
      }
   }
   return arr;
};

// Refine selection sort with comparison function
var selSortFn = function (arr, fn) {
   var swap;
   for (var i = 0; i < arr.length; i = i + 1) {
      for (var j = i; j < arr.length; j = j + 1) {
         if (fn(arr[i], arr[j]) > 0) { // same as arr[i] - arr[j] > 0
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
         }
      }
   }
   return arr;
};

// Playlist example
var playlist = [{
   title: 'God Only Knows',
   artist: 'The Beach Boys',
   duration: 171
}, {
   title: 'Piano Man',
   artist: 'Billy Joel',
   duration: 338
}, {
   title: 'New York, New York',
   artist: 'Frank Sinatra',
   duration: 206
}, {
   title: 'My Way',
   artist: 'Frank Sinatra',
   duration: 276
}, {
   title: 'New York, New York',
   artist: 'Cat Power',
   duration: 120
}, {
   title: 'Downtown Train',
   artist: 'Everything but the Girl',
   duration: 184
}, {
   title: 'I\'m Gonna Be (500 Miles)',
   artist: 'The Proclaimers',
   duration: 217
}, {
   title: 'La Vie En Rose',
   artist: 'Cristin Milioti',
   duration: 115
}, ];

// Filter out songs performed by Frank Sinatra
var sinatra = [];
for (var i = 0; i < playlist.length; i = i + 1) {
  if (playlist[i].artist === 'Frank Sinatra') {
    sinatra.push(playlist[i]);
  }
}

// Sort the playlist by its duration
playlist.sort(function (a, b) {
  return a.duration - b.duration;
});

/* Or using our selSortFn: selSortFn(playlist, function (a, b) {
 return a.duration - b.duration;
}); */

// Filter out those artists who performed 'New York, New York'
var newYork = [];
for (var i = 0; i < playlist.length; i = i + 1) {
  if (playlist[i].title === 'New York, New York') {
    newYork.push(playlist[i].artist);
  }
}

// Phantom object.
var phantom = {
   income: 22000,
   expense: 15000,
   remaining: function () {
      return this.income - this.expense;
   }
};
