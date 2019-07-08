'use strict';
(function () {

  // Pins параметры для формирования новых пинов
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinButtonsList = document.querySelectorAll('.map__pins');

  var renderPin = function (pin) {
    var pinElement = similarPinTemplate.cloneNode(true);

    pinElement.style.left = pin.location.x + 'px';
    pinElement.style.top = pin.location.y + 'px';

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.author.title;

    return pinElement;
  };

  // загрузка массива обьявлений с сервера
  window.loadPins = function () {
    window.load(function (pins) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < pins.length; i++) {
        fragment.appendChild(renderPin(pins[i]));
      }
      pinButtonsList[0].appendChild(fragment);
    });
  };
})();
