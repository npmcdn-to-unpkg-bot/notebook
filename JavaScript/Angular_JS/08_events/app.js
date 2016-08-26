var app = angular.module("ngClickApp", []);

app.controller("MyController", ['$scope', function($scope) {
    $scope.generator = {};
    $scope.generateNumber = function() {
	$scope.generator.number = Math.floor(Math.random()*1000);
    };

    $scope.reverseWord = function() {
	$scope.generator.reversed = $scope.generator.word.split("").reverse().join("");
    }
}]);

app.controller("PingPongGame", ["$scope", function($scope) {
    var Game = function() {
	this.score = [0, 0];
	this.serve = [true, false];
	this.point = function(player) {
	    if (!this.gameOver()) {
		this.score[player-1] ++;
	    }
	    if ((this.score[0] + this.score[1]) % 2 === 0) {
		this.switchServe();
	    }
	}
	this.switchServe = function() {
	    if (!this.gameOver()) {
		if (this.serve[0]) {
		    this.serve = [false, true];
		} else {
		    this.serve = [true, false];
		}
	    }
	};
	this.reset = function() {
	    this.score = [0, 0];
	    this.serve = [true, false];
	};
	this.gameOver = function() {
	    if ((this.score[0] >= 11 || this.score[1] >= 11) && Math.abs(this.score[0] - this.score[1]) >= 2) {
		return (this.score[0] > this.score[1]) ? 1 : 2;
	    }
	    else {
		return false;
	    }
	}
    };
    $scope.game = new Game();
    $scope.resetGame = function() {
	$scope.game = new Game();
    };
}]);


app.controller("RandomColor", ["$scope", "$timeout", function($scope, $timeout) {
    var colorStack = [];
    $scope.color = "white";
    function generateNumber(max) {
	return Math.floor(Math.random() * max)+1;
    }
    $scope.randomColor = function(reverse=false) {
	if (reverse) {
	    $scope.color = colorStack.pop();
	} else {
	    colorStack.push(`rgba(${generateNumber(255)}, ${generateNumber(255)}, ${generateNumber(255)}, 0.8)`);
	    $scope.color = colorStack[colorStack.length-1];
	}
    };

    var replaying = false;

    $scope.reverseColors = function() {
      var displayPrevColor = function() {
	// do some logic to change color
	$scope.randomColor(true);
	// if done replay colors
	replaying = false;
	// else
	$timeout(displayPrevColor, 1000);
	// end if/else
      };
      if (!replaying) {
	replaying = true;
	// This timeout starts the timeout loop
	$timeout(function() { displayPrevColor(); }, 500);
      }
    };
}]);


app.controller("ContactList", ["$scope", function($scope) {
    $scope.contacts = [];
    $scope.addContact = function(contactObj) {
	if (contactObj.name && contactObj.phone && contactObj.email) {
	    $scope.contacts.push(contactObj);
	}
    };
}]);
