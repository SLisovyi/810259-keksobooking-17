'use strict';

(function () {

  var map = document.querySelector('.map');
  var filterBlock = map.querySelector('.map__filters-container');
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');

  // DOM элементы блока карточки обьявления
  var card = cardTemplate.cloneNode(true);
  var cardAvatar = card.querySelector('.popup__avatar');
  var cardTitle = card.querySelector('.popup__title');
  var cardAddress = card.querySelector('.popup__text--address');
  var cardPrice = card.querySelector('.popup__text--price');
  var cardOfferType = card.querySelector('.popup__type');
  var cardGuestsCapacity = card.querySelector('.popup__text--capacity');
  var cardTime = card.querySelector('.popup__text--time');
  var cardDescription = card.querySelector('.popup__description');
  var cardPhotosBlock = card.querySelector('.popup__photos');
  var cardPhotos = cardPhotosBlock.querySelector('.popup__photo');

  // убираем предыдущие картинки
  var clearImgs = function () {
    while (cardPhotosBlock.firstChild) {
      cardPhotosBlock.removeChild(cardPhotosBlock.firstChild);
    }
  };
  window.clearImgs = clearImgs;

  // вызов инфо обьявления
  var showInfo = function (index) {
    index -= 1;
    if (index === -1) {
      index += 1;
    }

    // console.log(window.pins[2].id);
    // var id = window.pins.id;
    // console.log(id);

    cardAvatar.src = window.pins[index].author.avatar;
    cardTitle.innerHTML = window.pins[index].offer.title;
    cardAddress.innerHTML = window.pins[index].offer.address;
    cardPrice.innerHTML = window.pins[index].offer.price;
    cardOfferType.innerHTML = window.pins[index].offer.type;
    cardGuestsCapacity.innerHTML = window.pins[index].offer.guests;
    cardTime.innerHTML = 'Заезд после ' + window.pins[index].offer.checkin + ', выезд до ' + window.pins[1].offer.checkout;
    cardDescription.innerHTML = window.pins[index].offer.description;

    var photos = window.pins[index].offer.photos;

    for (var i = 0; i < photos.length; i++) {
      var otherPhotos = cardPhotos.cloneNode(true);
      cardPhotosBlock.appendChild(otherPhotos).src = photos[i];
    }

    map.insertBefore(card, filterBlock);

    // убираем инфо обьявления
    var setupOpenButton = document.querySelectorAll('.map__pin');
    var setupCloseButton = card.querySelector('.popup__close');

    var closeInfo = function () {
      card.classList.add('hidden');
      document.removeEventListener('keydown', onInfoEscKeydown);
      setupCloseButton.removeEventListener('click', closeInfo);
    };
    window.closeInfo = closeInfo;

    var onInfoEscKeydown = function (evt) {
      if (evt.keyCode === 27) {
        card.classList.add('hidden');
      }
    };

    var openInfo = function () {
      card.classList.remove('hidden');
      document.addEventListener('keydown', onInfoEscKeydown);
      setupCloseButton.addEventListener('click', closeInfo);
    };

    setupCloseButton.addEventListener('click', closeInfo);
    setupOpenButton[0].addEventListener('mousedown', closeInfo);

    for (var j = 1; j < setupOpenButton.length; j++) {
      setupOpenButton[j].addEventListener('click', openInfo);
    }
  };

  window.showInfo = showInfo;

})();
