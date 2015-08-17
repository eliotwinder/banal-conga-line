angular.module('app.event', [])
.controller('EventController', ['$scope', '$http', 'HttpRequests', function($scope, $http, HttpRequests){
    $scope.search = {};
    $scope.events = [];

    $scope.makeRandomEvent = function(){
      HttpRequests.postEvent(randomEvent());
    };

    $scope.getEvents = function(){
      HttpRequests.getEvents()
        .then(function(data){
          $scope.events = data.data;

        });
    };

    $scope.getEvents();
}]);

