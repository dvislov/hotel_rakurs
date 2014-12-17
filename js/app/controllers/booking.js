var rooms = [
  { text: "Одиночный", value: 1200 },
  { text: "Двойной", value: 2000 },
  { text: "Двойной премиум", value: 2300 },
  { text: "Для людей с ограниченными возможностями", value: 2500 }
];


var app = angular.module('booking', ['ui.bootstrap']);


app.controller('BookingCtrl', ['$scope', function($scope) {

  $scope.rooms = rooms;
  $scope.days = 1;

  $scope.init = function() {
    $scope.roomPrice = $scope.rooms[0].value;
    $scope.calcTotal();
  };

  $scope.calcTotal = function() {
    $scope.totalPrice = $scope.roomPrice * $scope.days;
  };

  $scope.openStartDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.openedStartDate = true;
  };

  $scope.openFinishedDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.openedStartDate = true;
  };

  $scope.init();

}]);
