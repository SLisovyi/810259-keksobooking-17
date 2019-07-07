'use strict';

(function () {

  var MAP = document.querySelector('.map');

  // формирование массива аватарок пользователей ------------------window
  var usersTotal = 8;

  var offerType = ['palace', 'flat', 'house', 'bungalo'];

  var getUsersAvatar = function () {
    var usersImgArray = [];
    for (var i = 0; i < usersTotal; i++) {
      usersImgArray[i] = 'img/avatars/user0' + [i + 1] + '.png';
    }
    return usersImgArray;
  };

  // users data generations from avatarPinImg.length  ------------------window
  window.getUsersData = function () {
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
          'x': window.randomInteger(0, MAP.offsetWidth),
          'y': window.randomInteger(0, MAP.offsetHeight - 70)
        }
      };
    }
    return usersArray;
  };
})();
