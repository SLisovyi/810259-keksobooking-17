'use strict';

(function () {

  var houseType = document.querySelector('#housing-type');

  window.load(function (data) {

    var pinsArray = data;

    houseType.addEventListener('change', function () {

      console.log(pinsArray.filter(function (it) {
        return it.offer.type === houseType.value;
      }));
    });

  });

})();
/* if (houseType.value === 'bungalo') {

  console.log(pinsArray.filter(function(it){
  return it.offer.type === 'bungalo'}));

} else if (houseType.value === 'flat') {

  console.log(pinsArray.filter(function(it){
    return it.offer.type === 'flat'}));

} else if (houseType.value === 'house') {

  console.log(pinsArray.filter(function(it){
    return it.offer.type === 'house'}));
} else if (houseType.value === 'palace') {

  console.log(pinsArray.filter(function(it){
    return it.offer.type === 'palace'}));
    getFilterResults();
} else {console.log(pinsArray);

*/
