'use strict';

(function () {

  var showPinsCheck = true;
  window.showPinsCheck = showPinsCheck;

  // function случайное число ------------------window
  window.randomInteger = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };

})();
