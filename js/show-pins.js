'use strict';
(function () {
  var MAX_ELEMENT_COUNT = 5;
  // Pins параметры для формирования новых пинов
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinButtonsList = document.querySelectorAll('.map__pins');

  var renderPin = function (pin) {

    var pinElement = similarPinTemplate.cloneNode(true);

    pinElement.style.left = pin.location.x + 'px';
    pinElement.style.top = pin.location.y + 'px';

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.author.title;

    // pinElement.addEventListener('click', window.showInfo);

    return pinElement;
  };

  var setPinListener = function (pins) {
    pins.forEach(function (pin, index) {

      pin.addEventListener('click', function (evt) {
        evt.preventDefault();

        window.clearImgs();
        window.showInfo(index);
        // console.log(index);
      });
    });
  };

  // функция показа пинов на карте
  var showPins = function (elements) {
    // console.log(elements);

    window.showPinsCheck = false;

    var fragment = document.createDocumentFragment();
    var elementCount = MAX_ELEMENT_COUNT;

    if (elements.length < elementCount) {
      elementCount = elements.length;
    }
    for (var i = 0; i < elementCount; i++) {
      fragment.appendChild(renderPin(elements[i]));
    }

    pinButtonsList[0].appendChild(fragment);

    var currentPins = document.querySelectorAll('.map__pin');
    setPinListener(currentPins);
  };
  window.showPins = showPins;
})();
