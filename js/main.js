'use strict';

// MOKS data

var avtarImgNumber = ['01', '02', '03', '04', '05', '06', '07', '08'];
var offerType = ['palace', 'flat', 'house', 'bungalo'];

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var ad = {
  author: {
    // строка, адрес изображения вида 'img/avatars/user{{xx}}.png', где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
    avatar: 'img/avatars/user' + avtarImgNumber[3] + '.png'
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

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var mapPins = document.querySelector('.map__pins');

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

// Creating new pin-element
var pinButton = makeElement('button', 'map__pin');
mapPins.appendChild(pinButton);

var pinImage = document.createElement('img');
pinImage.src = ad.author.avatar;
pinImage.alt = 'Профессиональная селфи-палка';
pinImage.style.left = '222px';
pinImage.style.top = '500px';
pinButton.appendChild(pinImage);
