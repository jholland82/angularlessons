var app = angular.module('twitterApp', []);

app.controller("AppCtrl", function($scope) {
  $scope.loadMoreTweets = function() {
    alert("Loading Tweets");
  }

  $scope.deleteTweets = function() {
    alert("Deleting Tweets");
  }
});

app.directive("enter", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      scope.$apply(attrs.enter);
    });
  }
});
