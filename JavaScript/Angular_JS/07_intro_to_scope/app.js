var app = angular.module("firstApp", []);

app.controller("MyFirstController", ["$scope", function($scope) {
    $scope.view = {};
    $scope.view.name = "joe";
}]);

app.controller("MySecondController", ["$scope", function($scope) {
}]);

app.controller("MyThirdController", ["$scope", function($scope) {
}]);
