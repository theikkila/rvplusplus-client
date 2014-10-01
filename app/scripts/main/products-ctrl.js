'use strict';

angular.module('rvplusplus')
  .controller('ProductsCtrl', function ($scope, Restangular) {
    Restangular.all('products').getList().then(function(products){
      $scope.products = products;
    });
});
