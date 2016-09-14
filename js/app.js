(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController) ;
  appController.$inject = ['$scope'];

  function LunchCheckController ($scope) {

    $scope.checkMuch = function () {
      $scope.message = getMessage($scope.items);
    }

  }

  // Messages
  const NO_DATA = "Please enter data first";
  const ENJOY = "Enjoy!";
  const TOO_MUCH = "Too much!";

  function getMessage(items) {
    if (isEmpty(items)) {
      return NO_DATA;
    } else {
      return evaluateNumber(getItemNumber(items));
    }
  }

  function evaluateNumber(number) {
    if (number == 0) {
      return NO_DATA;
    } else if (number<=3) {
      return ENJOY;
    } else {
      return TOO_MUCH;
    }
  }

  function getItemNumber(items) {
    var list = clean(items.split(","));
    return list.length;
  }

  function isEmpty(str) {
    return (!str || 0 === str.length || str.match(/^ *$/) !== null);
  }

  function clean (list) {
  for (var i = 0; i < list.length; i++) {
    if (isEmpty(list[i])) {
      list.splice(i, 1);
      i--;
    }
  }
  return list;
};

})();
