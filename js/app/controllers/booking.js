var rooms = [
  { text: "Одиночный", value: 1200 },
  { text: "Двойной", value: 2000 },
  { text: "Двойной премиум", value: 2300 },
  { text: "Для людей с ограниченными возможностями", value: 2500 }
];


var app = angular.module('booking', ['ui.bootstrap']);


app.controller('BookingCtrl', ['$scope', function($scope) {

  $scope.rooms = rooms;

  $scope.init = function() {
    $scope.roomPrice = $scope.rooms[0].value;

    $scope.startDate = moment();
    $scope.finishDate = moment().add(1, 'day');

    $scope.calcDuration();
    $scope.calcTotal();
  };

  $scope.calcTotal = function() {
    $scope.calcDuration();
    $scope.totalPrice = $scope.roomPrice * $scope.duration;
  };

  $scope.openStartDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.openedFinishDate = false;
    $scope.openedStartDate = true;
  };

  $scope.openFinishDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.openedOpenDate = true;
    $scope.openedFinishDate = true;
  };

  $scope.datesFormat = function() {
    $scope.startDateFormatted = "C " + moment($scope.startDate).format('DD.MM.YYYY') + " (14:00)";
    $scope.finishDateFormatted = "По " + moment($scope.finishDate).format('DD.MM.YYYY') + " (12:00)";
  };

  $scope.calcDuration = function() {
    var startRoundDay = moment($scope.startDate).startOf('day');
    var finishRoundDay = moment($scope.finishDate).startOf('day');

    $scope.duration = finishRoundDay.diff(startRoundDay, 'days');
  };

  $scope.$watch('startDate', function() {
    $scope.calcTotal();
    $scope.datesFormat();
  });

  $scope.$watch('finishDate', function() {
    $scope.calcTotal();
    $scope.datesFormat();
  });

  $scope.init();

}]);
