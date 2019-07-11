'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';

  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);

      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      // console.log('Произошла ошибка соединения');
      // onError('Произошла ошибка соединения');
      getError();
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 3000; // 10s

    xhr.open('GET', URL);

    xhr.send();
  };

  var getError = function () {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var body = document.querySelector('body');

    var errorElement = errorTemplate.cloneNode(true);
    body.appendChild(errorElement);
  };

  // загрузка массива обьявлений и внесение в глобальную переменную -window.pins-
  window.load(function (data) {
    var allPins = data;
    window.pins = allPins;
  });

})();
