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

// добавляем тег disablet на формы и поля
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

// убираем тег disablet с форм и полей
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

// действия при клике на mapPin, активация карты при нажатии на  метку
MAIN_PIN.addEventListener('click', function () {
  MAP.classList.remove('map--faded');
  FIELD_FORM.classList.remove('ad-form--disabled');

  // проверка были ли пины уже созданы
  if (!activated) {
    createPins();
  }

  removeInputDisabled(true);
});

// находим координаты MAIN_PIN на карте
var formInputAdsress = document.querySelector('#address');

var PIN_ARROW_HEIGHT = 22;
var MAIN_PIN_WIDTH = 40;
var MAIN_PIN_HEIGHT = 44;

var mainPinX = MAIN_PIN.offsetLeft - (MAIN_PIN_WIDTH / 2);
var mainPinY = MAIN_PIN.offsetTop + MAIN_PIN_HEIGHT + PIN_ARROW_HEIGHT;

MAIN_PIN.addEventListener('mouseup', function () {
  formInputAdsress.value = mainPinX + ', ' + mainPinY;
});
