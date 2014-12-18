var rooms = [
  { text: "Одиночный", value: 1200 },
  { text: "Двойной", value: 2000 },
  { text: "Двойной премиум", value: 2300 },
  { text: "Для людей с ограниченными возможностями", value: 2500 }
];


var app = angular.module('booking', ['ui.bootstrap']);


app.filter('currencyRUR', function() {
  return function(input) {
    input = input.toString() || '';
    var outTemp = "";
    var out = "";

    var digitPosition = 0;
    for (var i = input.length - 1; i >= 0; i--) {
      if (digitPosition % 3 == 0) {
        outTemp += " ";
      }
      digitPosition ++;
      outTemp += input[i];
    };

    for (var i = outTemp.length - 1; i >= 0; i--) {
      out += outTemp[i];
    };

    return out;
  };
});

app.controller('BookingCtrl', ['$scope', function($scope) {

  $scope.rooms = rooms;

  $scope.dateOptions = {
    startingDay: 1,
    showWeeks: false
  };

  $scope.init = function() {
    $scope.roomPrice = $scope.rooms[0].value;

    $scope.startDate = moment().format();
    $scope.finishDate = moment().add(1, 'day').format();

    $scope.minStartDate = $scope.startDate;
    $scope.minFinishDate = $scope.finishDate;

    $scope.calcTotal();
  };

  $scope.calcTotal = function() {
    $scope.calcDuration();
    $scope.dateInputsFormat();
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

  $scope.dateInputsFormat = function() {
    $scope.startDateFormatted = "C " + moment($scope.startDate).format('DD.MM.YYYY') + " (14:00)";
    $scope.finishDateFormatted = "По " + moment($scope.finishDate).format('DD.MM.YYYY') + " (12:00)";
  };

  $scope.calcDuration = function() {
    var startRoundDay = moment($scope.startDate).startOf('day');
    var finishRoundDay = moment($scope.finishDate).startOf('day');

    $scope.duration = finishRoundDay.diff(startRoundDay, 'days');
  };

  $scope.checkDatesRange = function() {
    var start = moment($scope.startDate).startOf('day');
    var finish = moment($scope.finishDate).startOf('day');

    if (moment.max(start, finish) > finish) {
      $scope.finishDate = moment($scope.startDate).add(1, 'day').format();
    };
  };

  $scope.$watch('startDate', function() {
    $scope.checkDatesRange();
    $scope.calcTotal();
  });

  $scope.$watch('finishDate', function() {
    $scope.checkDatesRange();
    $scope.calcTotal();
  });

  $scope.sendData = function() {
    var message = "This text must be send to server:\n" +
    "Name: " + $scope.clientName + "\n" +
    "Phone: " + $scope.clientPhone + "\n" +
    "E-mail: " + $scope.clientEmail + "\n" +
    "____________________________________________________\n" +
    "Apartments type: " + $scope.roomPrice + " RUR per day\n" +
    "Date start: " + $scope.startDateFormatted + "\n" +
    "Date finish: " + $scope.finishDateFormatted + "\n" +
    "Duration: " + $scope.duration + "day(s) \n" +
    "____________________________________________________\n" +
    "Total: " + $scope.totalPrice + " RUR";

    alert(message);
  }

  $scope.init();

}]);
