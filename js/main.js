'use strict';

var MAIN_PIN = document.querySelector('.map__pin--main');
var MAP = document.querySelector('.map');

var mapWidth = MAP.offsetWidth;
var mapHeight = MAP.offsetHeight;

var FIELD_FORM = document.querySelector('.ad-form');
var inputs = FIELD_FORM.querySelectorAll('input');
var textarea = FIELD_FORM.querySelectorAll('textarea');
var select = document.querySelectorAll('select');

// блок с пинами пользователей
var pinButtonsList = document.querySelectorAll('.map__pins');

// Pin элемент <template>
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

// формирование массива аватарок пользователей
var usersTotal = 8;

var offerType = ['palace', 'flat', 'house', 'bungalo'];

// function случайное число
var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

var getUsersAvatar = function () {
  var usersImgArray = [];
  for (var i = 0; i < usersTotal; i++) {
    usersImgArray[i] = 'img/avatars/user0' + [i + 1] + '.png';
  }
  return usersImgArray;
};

// users data generations from avatarPinImg.length
var getUsersData = function () {
  var usersArray = [];
  for (var i = 0; i < getUsersAvatar().length; i++) {
    usersArray [i] = {
      'author': {
        'avatar': getUsersAvatar()[i]
      },
      'offer': {
        'type': offerType[i]
      },
      'location': {
        'x': randomInteger(0, mapWidth),
        'y': randomInteger(0, mapHeight - 70)
      }
    };
  }
  return usersArray;
};

// генерируем Pins из массива данных userAds
var activated = false;
var createPins = function () {

  for (var i = 0; i < getUsersData().length; i++) {
    var pinElement = similarPinTemplate.cloneNode(true);

    pinElement.style.left = getUsersData()[i].location.x + 'px';
    pinElement.style.top = getUsersData()[i].location.y + 'px';

    pinElement.querySelector('img').src = getUsersData()[i].author.avatar;
    pinElement.querySelector('img').alt = getUsersData()[i].author.title;

    pinButtonsList[0].appendChild(pinElement);
  }
  activated = true;
};

// добавляем тег disabled на формы и поля
var setInputDisabled = function (onOff) {

  inputs.forEach(function (element) {
    element.setAttribute('disabled', onOff);
  });
  textarea.forEach(function (element) {
    element.setAttribute('disabled', onOff);
  });
  select.forEach(function (element) {
    element.setAttribute('disabled', onOff);
  });
};
setInputDisabled();

// убираем тег disabled с форм и полей
var removeInputDisabled = function (onOff) {

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

// ----------------------------------------------------------------
MAIN_PIN.addEventListener('mousedown', function (evt) {
  var formInputAdsress = document.querySelector('#address');

  // находим координаты MAIN_PIN на карте и его элементы
  var PIN_ARROW_HEIGHT = 22;
  var MAIN_PIN_WIDTH = 40;
  var MAIN_PIN_HEIGHT = 44;
 
  evt.preventDefault();

  MAP.classList.remove('map--faded');
  FIELD_FORM.classList.remove('ad-form--disabled');

  // проверка были ли пины уже созданы
  if (!activated) {
    createPins();
  }

  removeInputDisabled(true);
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
    if ((MAIN_PIN.offsetLeft - shift.x) > (MAP.offsetWidth - 50)){
      MAIN_PIN.style.left = (MAP.offsetWidth - 50) + 'px';
    } else if ((MAIN_PIN.offsetLeft - shift.x) < 0){
      MAIN_PIN.style.left = 1 + 'px';
    } else (MAIN_PIN.style.left = (MAIN_PIN.offsetLeft - shift.x) + 'px')

    // ограничение перемещения пина по высоте карты
    if ((MAIN_PIN.offsetTop - shift.y) > (MAP.offsetHeight - 140)){
      MAIN_PIN.style.top = MAP.offsetHeight - 140 + 'px'; //document.querySelector('.map').offsetHeight
    } else if ((MAIN_PIN.offsetTop - shift.y) < 60){
      MAIN_PIN.style.top = 60 + 'px';
    } else (MAIN_PIN.style.top = (MAIN_PIN.offsetTop - shift.y) + 'px')

    // находим положение указателя стрелки пина
    var mainPinX = MAIN_PIN.offsetLeft - (MAIN_PIN_WIDTH / 2);
    var mainPinY = MAIN_PIN.offsetTop + MAIN_PIN_HEIGHT + PIN_ARROW_HEIGHT;

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
// ----------------------------------------------------------------

// --------------------------поля ввода------------------------------

// изменение поля цена в зависимости от выбранного типа жилья
var adForm = document.querySelector('.ad-form');
var selectTypeOfHouse = adForm.querySelector('#type');
var inputPrice = adForm.querySelector('#price');

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
