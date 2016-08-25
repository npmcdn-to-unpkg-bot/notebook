var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope) {
    $scope.name = "Serevus Snape";
});

app.controller("ExerciseController", function($scope) {
    $scope.color = "Green";
    let dateA = new Date(2100, 10);
    let dateB = new Date(2000, 10);
    $scope.secondsInACentury = dateA-dateB;
    $scope.rightNow = new Date();
});

app.controller("MadLibController", function($scope) {
    $scope.madlib = {};
    $scope.prerender = {};
    $scope.clear = function() { $scope.madlib={}; }
    $scope.generate = function() { $scope.madlib = Object.assign({}, $scope.prerender);}
});
