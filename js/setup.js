'use strict';
(function () {

  // Pins параметры для формирования новых пинов
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinButtonsList = document.querySelectorAll('.map__pins');

  window.renderPin = function (pin) {
    var pinElement = similarPinTemplate.cloneNode(true);

    pinElement.style.left = pin.location.x + 'px';
    pinElement.style.top = pin.location.y + 'px';

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.author.title;

    return pinElement;
  };

  // функция показа пинов на карте

  window.showPins = function (element) {
    var fragment = document.createDocumentFragment();
    var elementCount = 5;

    if (element.length < elementCount) {
      for (var i = 0; i < element.length; i++) {
        fragment.appendChild(window.renderPin(element[i]));
      }
    } else {
      for (var j = 0; j < elementCount; j++) {
        fragment.appendChild(window.renderPin(element[j]));
      }
    }

    pinButtonsList[0].appendChild(fragment);
  };

})();
