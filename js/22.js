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

// массив users avatar
var avatarPinImg = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];

var offerType = ['palace', 'flat', 'house', 'bungalo'];

// Mocks data for users ads
var userAds = [
  {
    author: {
      avatar: avatarPinImg[0],
      title: 'Image title'
    },
    offer: {
      type: offerType[0]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[1],
      title: 'Image title 1'
    },
    offer: {
      type: offerType[1]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[2],
      title: 'Image title 2'
    },
    offer: {
      type: offerType[2]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[3],
      title: 'Image title 2'
    },
    offer: {
      type: offerType[2]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[4],
      title: 'Image title 2'
    },
    offer: {
      type: offerType[2]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[5],
      title: 'Image title 2'
    },
    offer: {
      type: offerType[2]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[6],
      title: 'Image title 2'
    },
    offer: {
      type: offerType[2]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  },
  {
    author: {
      avatar: avatarPinImg[7],
      title: 'Image title 2'
    },
    offer: {
      type: offerType[2]
    },
    location: {
      x: randomInteger(0, 704),
      y: randomInteger(130, 630)
    }
  }
];

// генерируем Pins из массива данных userAds
for (var i = 0; i < userAds.length; i++) {
  var pinElement = similarPinTemplate.cloneNode(true);

  pinElement.style.left = userAds[i].location.x + 'px';
  pinElement.style.top = userAds[i].location.y + 'px';

  pinElement.querySelector('img').src = userAds[i].author.avatar;
  pinElement.querySelector('img').alt = userAds[i].author.title;

  pinButtonsList[0].appendChild(pinElement);
}
