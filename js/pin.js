'use strict';

// var activated = false;

(function () {

  var map = document.querySelector('.map');
  var fieldForm = document.querySelector('.ad-form');
  var formInputAdsress = document.querySelector('#address');
  var mainPin = document.querySelector('.map__pin--main');

  // находим mainPin элементы
  var PIN_ARROW_HEIGHT = 22;
  var MAIN_PIN_WIDTH = 40;
  var MAIN_PIN_HEIGHT = 44;

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    map.classList.remove('map--faded');
    fieldForm.classList.remove('ad-form--disabled');

    // показываем обьявления при клике на основной пин

    window.showPins(window.pins);

    window.removeInputDisabled(true);

    formInputAdsress.setAttribute('disabled', true);

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      // ограничение перемещения пина по ширине карты
      if ((mainPin.offsetLeft - shift.x) > (map.offsetWidth - 50)) {
        mainPin.style.left = (map.offsetWidth - 50) + 'px';
      } else if ((mainPin.offsetLeft - shift.x) < 0) {
        mainPin.style.left = 1 + 'px';
      } else {
        mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
      }

      // ограничение перемещения пина по высоте карты
      if ((mainPin.offsetTop - shift.y) > (map.offsetHeight - 140)) {
        mainPin.style.top = map.offsetHeight - 140 + 'px';
      } else if ((mainPin.offsetTop - shift.y) < 60) {
        mainPin.style.top = 60 + 'px';
      } else {
        mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      }

      // находим положение указателя стрелки пина
      var mainPinX = mainPin.offsetLeft - (MAIN_PIN_WIDTH / 2);
      var mainPinY = mainPin.offsetTop + MAIN_PIN_HEIGHT + PIN_ARROW_HEIGHT;

      // изменение поля адрес при перемещении пина
      formInputAdsress.value = mainPinX + ', ' + mainPinY;
    };

    // отмена слушателей
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
