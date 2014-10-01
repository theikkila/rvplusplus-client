'use strict';

angular.module('rvplusplus')
  .controller('NaviCtrl', function ($scope, $rootScope, $state) {
    $scope.$state = $state;  
  });
