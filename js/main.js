'use strict';

// function случайное число
var randomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};


// блок с пинами пользователей
var pinButtonsList = document.querySelectorAll('.map__pins');

// Pin элемент <template>
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

// формирование массива аватарок пользователей
var usersTotal = 8;

var getUsersAvatar = function () {
  var usersImgArray = [];
  for (var i = 0; i < usersTotal; i++) {
    usersImgArray [i] = 'img/avatars/user0' + [i + 1] + '.png';
  }
  return usersImgArray;
};

var offerType = ['palace', 'flat', 'house', 'bungalo'];

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
        'x': randomInteger(0, 704),
        'y': randomInteger(130, 630)
      }
    };
  }
  return usersArray;
};

// генерируем Pins из массива данных userAds
var createPins = function () {

  for (var i = 0; i < getUsersData().length; i++) {
    var pinElement = similarPinTemplate.cloneNode(true);

    pinElement.style.left = getUsersData()[i].location.x + 'px';
    pinElement.style.top = getUsersData()[i].location.y + 'px';

    pinElement.querySelector('img').src = getUsersData()[i].author.avatar;
    pinElement.querySelector('img').alt = getUsersData()[i].author.title;

    pinButtonsList[0].appendChild(pinElement);
  }
};

// активация карты при нажатии на  метку
var mainPin = document.querySelector('.map__pin--main');
var map = document.querySelector('.map');
var fieldForm = document.querySelector('.ad-form');

var inputs = fieldForm.querySelectorAll('input');
var textarea = fieldForm.querySelectorAll('textarea');
var select = document.querySelectorAll('select');

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

// действия при клике на mapPin
mainPin.addEventListener('click', function () {
  map.classList.remove('map--faded');
  fieldForm.classList.remove('ad-form--disabled');

  createPins();
  removeInputDisabled(true);
});

// находим координаты mainPin на карте
var formInputAdsress = document.querySelector('#address');

var PIN_ARROW_HEIGHT = 22;
var MAIN_PIN_WIDTH = 40;
var MAIN_PIN_HEIGHT = 44;

var mainPinX = mainPin.offsetLeft - (MAIN_PIN_WIDTH / 2);
var mainPinY = mainPin.offsetTop + MAIN_PIN_HEIGHT + PIN_ARROW_HEIGHT;

mainPin.addEventListener('mouseup', function () {
  formInputAdsress.value = mainPinX + ', ' + mainPinY;
});
