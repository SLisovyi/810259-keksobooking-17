'use strict';

(function () {

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
  var inputTimeIn = adForm.querySelector('#timein');
  var inputTimeOut = adForm.querySelector('#timeout');

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
})();
