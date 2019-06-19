'use strict';

// MOKS data

var avatarImgNumber = ['01', '02', '03', '04', '05', '06', '07', '08'];
var offerType = ['palace', 'flat', 'house', 'bungalo'];

// function случайное число
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var userAd = {
  author: {
    // строка, адрес изображения вида. Адреса изображений не повторяются
    avatar: 'img/avatars/user' + avatarImgNumber[randomInteger(0, 8)] + '.png'
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

  // убираем faded class for Map
var map = document.querySelector('.map');
map.classList.remove('map--faded');

// клонирование Pin элемента на карте <template>
var pinButtons = document.querySelectorAll('.map__pins');

var pinTemplate = document.querySelector('#pin').content.querySelector('button');

var pinImg = document.querySelector('#pin').content.querySelector('img');

for (var i = 0; i < 8; i++) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.children[0].textContent = i;
  pinButtons[0].appendChild(pinElement);

  pinImg.src = userAd.author.avatar;
  pinElement.style.left = userAd.location.x + 'px';
  pinElement.style.top = userAd.location.y + 'px';
  // pinElement[i].style.left = userAd.location.x + 'px';
  // pinElement[i].top = userAd.location.y + 'px';
}
