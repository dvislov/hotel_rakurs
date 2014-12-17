var rooms = [
  { text: "���������", value: 1200 },
  { text: "�������", value: 2000 },
  { text: "������� �������", value: 2300 },
  { text: "��� ����� � ������������� �������������", value: 2500 }
];

var app = angular.module('booking', []);

app.controller('BookingCtrl', ['$scope', function($scope) {

  $scope.rooms = rooms;
  $scope.days = 1;
  $scope.totalPrice = 0;

  $scope.init = function() {
    $scope.roomPrice = $scope.rooms[0].value;
    $scope.calcTotal();
  };

  $scope.calcTotal = function() {
    $scope.totalPrice = $scope.roomPrice * $scope.days;
  };

  $scope.init();

}]);
