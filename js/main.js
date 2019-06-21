'use strict';

// function случайное число
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

/* var userAd = {
  author: {
    // строка, адрес изображения вида. Адреса изображений не повторяются
    avatar: 'img/avatars/user' + avatarImgNumber[1] + '.png'
  },
  offer: {
    // строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
    type: offerType[0]
  },
  location: {
    // случайное число, координата x метки на карте. Значение ограничено ''размерами блока'', в котором перетаскивается метка.
    x: randomInteger(0, 704),
    // случайное число, координата y метки на карте от 130 до 630.
    y: randomInteger(130, 630)
  }
};
 */
// убираем faded class for Map
var map = document.querySelector('.map');
map.classList.remove('map--faded');

// блок с пинами пользователей
var pinButtonsList = document.querySelectorAll('.map__pins');
// Pin элемент <template>
var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

// массив users avatar imgs
// var avatarPinImg = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];

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
for (var i = 0; i < getUsersData().length; i++) {
  var pinElement = similarPinTemplate.cloneNode(true);

  pinElement.style.left = getUsersData()[i].location.x + 'px';
  pinElement.style.top = getUsersData()[i].location.y + 'px';

  pinElement.querySelector('img').src = getUsersData()[i].author.avatar;
  pinElement.querySelector('img').alt = getUsersData()[i].author.title;

  pinButtonsList[0].appendChild(pinElement);
}
