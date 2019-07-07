'use strict';

// генерируем Pins из массива данных userAds ------------------window
window.createPins = function () {

  // Pin элемент <template>
  var similarPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  // блок с пинами пользователей
  var pinButtonsList = document.querySelectorAll('.map__pins');

  for (var i = 0; i < window.getUsersData().length; i++) {
    var pinElement = similarPinTemplate.cloneNode(true);

    pinElement.style.left = window.getUsersData()[i].location.x + 'px';
    pinElement.style.top = window.getUsersData()[i].location.y + 'px';

    pinElement.querySelector('img').src = window.getUsersData()[i].author.avatar;
    pinElement.querySelector('img').alt = window.getUsersData()[i].author.title;

    pinButtonsList[0].appendChild(pinElement);
  }
  // activated = true;
};
