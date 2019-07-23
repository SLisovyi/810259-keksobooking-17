'use strict';

(function () {

  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var inputs = adForm.querySelectorAll('input');
  var textarea = adForm.querySelectorAll('textarea');
  var select = document.querySelectorAll('select');

  var selectTypeOfHouse = adForm.querySelector('#type');
  var inputPrice = adForm.querySelector('#price');

  // добавляем тег disabled на формы и поля
  (function (onOff) {

    inputs.forEach(function (element) {
      element.setAttribute('disabled', onOff);
    });
    textarea.forEach(function (element) {
      element.setAttribute('disabled', onOff);
    });
    select.forEach(function (element) {
      element.setAttribute('disabled', onOff);
    });
  })();

  // убираем тег disabled с форм и полей
  window.removeInputDisabled = function (onOff) {

    inputs.forEach(function (element) {
      element.removeAttribute('disabled', onOff);
    });
    textarea.forEach(function (element) {
      element.removeAttribute('disabled', onOff);
    });
    select.forEach(function (element) {
      element.removeAttribute('disabled', onOff);
    });
  };

  mainPin.addEventListener('click', function () {

    var inputTimeIn = adForm.querySelector('#timein');
    var inputTimeOut = adForm.querySelector('#timeout');
    var roomNumber = adForm.querySelector('#room_number');
    var capacity = adForm.querySelector('#capacity');
    var capacityOptions = capacity.querySelectorAll('option');

    inputPrice.placeholder = 1000;
    capacity.value = '1';
    capacityOptions[0].disabled = true;
    capacityOptions[1].disabled = true;
    capacityOptions[3].disabled = true;

    // изменение поля цена в зависимости от выбранного типа жилья
    selectTypeOfHouse.addEventListener('change', function () {
      if (selectTypeOfHouse.value === 'bungalo') {
        inputPrice.placeholder = 0;
      } else if (selectTypeOfHouse.value === 'flat') {
        inputPrice.placeholder = 1000;
      } else if (selectTypeOfHouse.value === 'house') {
        inputPrice.placeholder = 5000;
      } else if (selectTypeOfHouse.value === 'palace') {
        inputPrice.placeholder = 10000;
      }
    });

    // изменение поля заселения и выселения
    inputTimeIn.addEventListener('change', function () {
      if (inputTimeIn.value !== inputTimeOut.value) {
        inputTimeOut.value = inputTimeIn.value;
      }
    });

    inputTimeOut.addEventListener('change', function () {

      if (inputTimeIn.value !== inputTimeOut.value) {
        inputTimeIn.value = inputTimeOut.value;
      }
    });

    // Количество комнат синхронизация с полем Количество мест
    roomNumber.addEventListener('change', function () {
      if (roomNumber.value === '1') {
        capacity.value = '1';
        capacityOptions[0].disabled = true;
        capacityOptions[1].disabled = true;
        capacityOptions[3].disabled = true;
      } else if (roomNumber.value === '2') {
        capacity.value = '2';
        capacityOptions[0].disabled = true;
        capacityOptions[1].disabled = false;
        capacityOptions[2].disabled = false;
        capacityOptions[3].disabled = true;
      } else if (roomNumber.value === '3') {
        capacity.value = '3';
        capacityOptions[0].disabled = false;
        capacityOptions[1].disabled = false;
        capacityOptions[2].disabled = false;
        capacityOptions[3].disabled = true;
      } else if (roomNumber.value === '100') {
        capacity.value = '0';
        capacityOptions[0].disabled = true;
        capacityOptions[1].disabled = true;
        capacityOptions[2].disabled = true;
        capacityOptions[3].disabled = false;
      }
    });
  });
})();
