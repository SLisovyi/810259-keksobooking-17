'use strict';

(function () {

  var pinsBlock = document.querySelector('.map__pins');
  // var pins = pinsBlock.querySelectorAll('.map__pin');

  var filterHouseType = document.querySelector('#housing-type');

  // убираем пины
  function clearPins() {
    while (pinsBlock.firstChild) {
      pinsBlock.removeChild(pinsBlock.firstChild);
    }
  }

  // any type
  var filterAny = function () {
    var anyPins = window.pins.slice();
    window.showPins(anyPins);
  };

  // выводим пины в зависимости от типа жилья
  filterHouseType.addEventListener('change', function () {

    // убираем предыдущие pins
    clearPins();

    var pins = window.pins;

    var filteredPins = pins.filter(function (it) {
      return it.offer.type === filterHouseType.value;
    });
    // console.log(filteredPins);
    window.showPins(filteredPins);
    // console.log(filteredPins);

    if (filterHouseType.value === 'any') {
      filterAny();
    }
  });
})();
