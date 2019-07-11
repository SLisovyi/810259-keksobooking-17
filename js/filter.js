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

  // выводим пины в зависимости от типа жилья
  filterHouseType.addEventListener('change', function () {

    clearPins();

    var filteredPins = window.pins.filter(function (it) {
      return it.offer.type === filterHouseType.value;
    });

    window.showPins(filteredPins);
    // console.log(filteredPins);
  });
})();
