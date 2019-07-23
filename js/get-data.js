'use strict';

(function () {

  var getData = function () {
    // ---------------------------
    var onSuccess = function (data) {

      window.pins = data;
      for (var i = 0; i < window.pins.length; i++) {
        window.pins[i].id = i;
      }

      // console.log(window.pins);
      // console.log(data[4].id);

      // проверка были ли пины уже созданы
      if (window.showPinsCheck) {
        window.showPins(window.pins);
        window.showPinsCheck = false;
      }
    };

    var onError = function (/* errorMessage */) {

      var errorTemplate = document.querySelector('#error').content.querySelector('.error');
      var body = document.querySelector('body');

      var errorElement = errorTemplate.cloneNode(true);
      body.appendChild(errorElement);

    };

    window.backend.load(onSuccess, onError);
  };
  window.getData = getData;

})();
